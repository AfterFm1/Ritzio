"use client"
import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Featured = () => {
  const {status,data:session}=useSession();
  return (
      <div className={styles.container}>
      <div className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">Hey <span className="text-green-700">{session?.user?.name?.split(' ')[0]}</span>, step into a realm where creativity springs to life.</div> 
      <div className="flex gap-10 s:mt-1 sm:mt-10 mt-10 h-3/5 w-full items:center">
        <div className="flex-1 relative h-full sm:block hidden">
           <Image src="/abstract.jpg" alt="abstract-art" fill className="object-cover rounded-lg"/>
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-center h-full">
           <div className="xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl text-2xl font-semibold">Ready to unleash your ideas?</div>
           <p className="lg:text-base md:text-sm sm:text-xs text-base font-semibold text-softColor">Ritzio, where creativity knows no boundaries. Here, everyone—regardless of who you are or where you're from—has the freedom to share their ideas openly. Join us in celebrating diverse perspectives, sparking insightful discussions, and shaping a community where every voice matters</p>
           <div className="flex items-center gap-5">
           <Link href="/blog" className={styles.button}>Start Reading</Link>
           { status==="unauthenticated" &&
           <Link href="/login" className={styles.button}>Start Writing</Link>
           }
            { status==="authenticated" &&
           <Link href="/write" className={styles.button}>Start Writing</Link>
           }
           </div>
        </div>
      </div>
      </div>
  )
}

export default Featured