"use client";
import React, { useState } from "react";
import useSWR from "swr";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Menu from "@/components/menu/Menu";
import Comment from "@/components/comment/Comment";

const fetcher = (url:any) => fetch(url).then((res) => res.json());

const SinglePost = ({ params }: {params:any}) => {
  const { slug } = params;
  const { data, error } = useSWR(
    `http://localhost:3000/api/posts/${slug}`,
    fetcher
  );
  const { toast } = useToast();
  const [like, setLike] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleClick = (name:any) => {
    toast({
      title: `You are now following ${name}`,
    });
  };

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div>
      <div className="flex items-center gap-12 mt-10">
        <div className="md:h-80 h-60 flex-1 flex flex-col justify-between">
          <div
            style={{ color: "var(--textColor" }}
            className="xl:text-5xl md:text-4xl s:text-3xl text-2xl font-bold"
          >
            {data?.title}
          </div>
          <div className="flex gap-3 items-center">
            <Avatar>
              <AvatarImage src={data?.user.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div
                  style={{ color: "var(--textColor)" }}
                  className="xl:text-2xl md:text-xl text-base font-bold"
                >
                  {data?.user.name}
                </div>
                <div className={styles.button} onClick={()=>handleClick(data.user.name)}>
                  Follow
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                  <div
                    style={{ color: "var(--softTextColor)" }}
                    className="text-sm"
                  >
                    {data?.createdAt.substring(0, 10)}
                  </div>
                </div>
                <div
                  style={{ color: "var(--softTextColor)" }}
                  className="text-sm"
                >
                  {Math.ceil(data.desc.split(" ").length/200)} min read
                </div>
                {like === false && (
                  <ThumbUpAltOutlinedIcon
                    onClick={handleLike}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {like && (
                  <ThumbUpAltIcon
                    onClick={handleLike}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-80 relative rounded-lg md:block hidden">
          <Image
            src={data?.img}
            alt="post-img"
            fill
            className="rounded-lg object-fill"
          />
        </div>
      </div>
      <div className="flex gap-12">
        <div className={styles.container}>
          <div
            className="xl:text-xl md:text-lg text-base"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div>
            <Comment postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePost;
