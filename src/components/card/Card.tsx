import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({cat,img,key}) => {
  return (
    <Link href={`/blog/?cat=${cat}`} key={key}>
      <div className="h-64 w-64  rounded-2xl relative flex flex-col justify-center items-center hover:opacity-80 hover:scale-105 opacity-90">
        <div className="relative w-full h-full rounded-2xl">
       <Image src={img} fill alt="category" className="rounded-2xl object-cover"/>
       </div>
       <div className="absolute text-white text-3xl font-semibold capitalize">{cat}</div>
       </div>
    </Link>
  )
} 

export default Card