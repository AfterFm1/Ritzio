"use client";
import React, { useEffect, useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {app} from "../../utils/firebase"
import dynamic from "next/dynamic";


const storage = getStorage(app);

const WritePage = () => {
  const ReactQuill=dynamic(()=>import('react-quill'),{ssr:false});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [media,setMedia]= useState("");
  const [category, setCategory] = useState("");
  const { status } = useSession();
  const router = useRouter();
  console.log(status);

  useEffect(() => {
    const upload = () => {
      let name;
      if (file) {
         name = new Date().getTime() + file.name;
      } else {
        console.error("File is null or undefined");
      }
      const storageRef = ref(storage, name);

      let uploadTask:any;

if (file) {
  uploadTask = uploadBytesResumable(storageRef, file);
} else {
  console.error('No file selected');
}

      uploadTask.on(
        "state_changed",
        (snapshot:any) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error:any) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str:any) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res=await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        catSlug:category,
        img:media,
        slug:slugify(title)
      }),
    });
    router.push(`/posts/${slugify(title)}`)
  };

  return (
    <div className="mt-10">
      <div className="flex justify-end">
        <Select onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gaming">Gaming</SelectItem>
            <SelectItem value="music">Music</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="spirituality">Spirituality</SelectItem>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="coding">Coding</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col">
      <input
        type="text"
        placeholder="Title"
        className="border-none outline-none text-5xl bg-transparent p-10 w-full"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className=" flex flex-col  gap-5 h-screen mt-10">
        <div className="flex gap-10">
        <div
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full border-2 border-softColor border-solid cursor-pointer flex items-center justify-center object-cover relative"
        >
          <Image src="/plus.png" width={16} height={16} alt=""/>
        </div>
        {open && (
          <div className="flex gap-5 w-full">
            <input
              type="file"
              id="image"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files[0]) {
                  setFile(files[0]);
                } else {
                  setFile(null);
                }
              }}
              style={{ display: "none" }}
            />
              <label htmlFor="image">
            <div className="w-10 h-10 rounded-full border-2 border-green-950 border-solid cursor-pointer flex items-center justify-center object-cover relative">
                <Image src="/image.png" width={16} height={16} alt=""/>
            </div>
              </label>
          </div>
        )}
        </div>
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className="w-full mt-10 min-h-screen overflow-y-auto"
        />
        </div>
      </div>
      <div className={styles.button} onClick={handleSubmit}>
        Publish
      </div>
    </div>
  );
};

export default WritePage;
