"use client"
import React, { useState } from 'react'
import useSWR from 'swr';
import styles from './comment.module.css'
import Link from 'next/link';
import SingleComment from '../singleComment/SingleComment';
import { useSession } from 'next-auth/react';

const fetcher= async(url:any)=>{
  const res=await fetch(url);
  const data=await res.json();
  if(!res.ok){
    const error= new Error(data.message);
    throw error;
  }
  return data;
}

const Comment = ({postSlug}:{postSlug:any}) => {
  const {status}=useSession();
  const {data,mutate,isLoading}=useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`,fetcher)
  const [desc,setDesc]=useState("");

  const handleSubmit=async()=>{
    await fetch("/api/comments",{
      method:"POST",
      body:JSON.stringify({
        desc,
        postSlug: decodeURIComponent(postSlug)
      }
      )
    })
    mutate();
  }
  
  return (
    <div className="mt-10">
        {
            status==="unauthenticated"?
            <Link href="/login" className="text-xl font-bold mt-10">Login to comment</Link>
            :
            <div>
              <textarea placeholder="Write a comment..." className={styles.text} onChange={e=>setDesc(e.target.value)}/>
              <div className={styles.button} onClick={handleSubmit}>Comment</div>
            </div>
        }
        <div className="text-3xl font-bold mt-10 mb-10">Comments</div>
        {isLoading? "Loading...": data?.map((item:any)=>(
        <SingleComment item={item} key={item._id}/>
      ))}
    </div>
  )
}

export default Comment
