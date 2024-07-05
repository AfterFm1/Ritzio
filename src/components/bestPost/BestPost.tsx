import React from 'react'
import styles from './bestPost.module.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
const BestPost = ({link,img,name,date,cat,title}:{link:any,img:any,name:any,date:any,cat:any,title:any}) => {
  return (
     <Link href={link} className="flex items-center gap-2 mt-11" >
        <Avatar>
          <AvatarImage src={img} />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
            <div className="flex gap-1 justify-between">
                <div className="lg:text-base text-sm font-bold">{name}</div>
                <div className="lg:flex items-center gap-1 hidden">
                <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                <div style={{ color: 'var(--softTextColor)' }} className="text-sm">{date}</div>
                </div> 
                <Badge variant="outline">{cat}</Badge>
            </div>
            <div className="lg:text-lg text-base font-bold">{title}</div>
        </div>
     </Link>
  )
}

export default BestPost
