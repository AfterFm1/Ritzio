"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PostCard = ({ item, key }:{item:any,key:any}) => {
  const cat = "music";
  const { toast } = useToast();
  const handleClick = () => {
    toast({
      title: "You are now following Travis Scott",
    });
  };
  return (
    <div
      className="xl:h-80 lg:h-60 h-70 flex items-center gap-12 mb-10"
      key={key}
    >
      <div className="h-full flex-1 relative xl:block hidden">
        <Image
          src={item.img}
          alt="post-img"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-7">
          <div className="text-base font-bold">{item.user.name}</div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-slate-600"></div>
            <div style={{ color: "var(--softTextColor)" }} className="text-sm">
              {item.createdAt.substring(0, 10)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2 mb-5">
          <Link href={`/posts/${item.slug}`}>
            <div className="text-xl font-bold">{item.title}</div>
          </Link>
          <div
            style={{ color: "var(--softTextColor)" }}
            className="text-base"
            dangerouslySetInnerHTML={{
              __html: item.desc.substring(0, 250) + "...",
            }}
          ></div>
          <Link
            href={`/posts/${item.slug}`}
            style={{ borderColor: "var(--textColor)" }}
            className="text-base font-semibold w-max border-b"
          >
            Read More
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/blog/?cat=${cat}`}>
            <Badge variant="outline" style={{ textTransform: "capitalize" }}>
              {item.catSlug}
            </Badge>
          </Link>
          <div style={{ color: "var(--softTextColor)" }} className="text-sm">
            {Math.ceil(item.desc.split(" ").length / 200)} min read
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AddCircleIcon
                  onClick={handleClick}
                  className="cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Follow author</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
