import React from "react";
import styles from "./singleComment.module.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SingleComment = ({item}:{item:any}) => {
  return (
    <div className="flex items-center gap-3 mt-10">
      <Avatar>
        <AvatarImage src={item?.user?.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div
          style={{ color: "var(--textColor)" }}
          className="md:text-xl text-base font-bold"
        >
          {item?.user?.name}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-slate-600"></div>
          <div style={{ color: "var(--softTextColor)" }} className="text-sm">
            {item.createdAt.substring(0,10)}
          </div>
        </div>
      </div>
      <div className="md:text-base text-sm">{item.desc}</div>
      </div>
    </div>
  );
};

export default SingleComment;
