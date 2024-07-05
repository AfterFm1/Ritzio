"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"
import styles from "./author.module.css"
const Author = ({img,name,desc}:{img:any,name:any,desc:any}) => {
    const { toast } = useToast();
    const handleClick=()=>{
        toast({
            title: `You are now following ${name}`,
          })
    }
  return (
        <div className="flex items-center gap-2 mt-11 justify-between">
        <div className="flex gap-2">
        <Avatar>
          <AvatarImage src={img} className="object-cover"/>
          <AvatarFallback>{name.substring(0,2)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-between">
        <div className="text-base font-bold">{name}</div>  
        <div className={styles.desc}>{desc}</div> 
        </div>
        </div>
        <div className={styles.button} onClick={handleClick}>Follow</div>
        </div>
  )
}

export default Author
