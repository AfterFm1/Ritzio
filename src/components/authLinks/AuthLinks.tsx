"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

const AuthLinks = () => {
  const {status}=useSession();
  return (
    <>
    {status==="unauthenticated" &&
    <>
    <div className="font-semibold"><Link href="/login">Write</Link></div>
    <div className="font-semibold"><Link href="/login">Login</Link></div>
    </>
    }
    {status==="authenticated" &&
    <>
    <div className="font-semibold"><Link href="/write">Write</Link></div>
    <div className="font-semibold cursor-pointer" onClick={signOut}>Logout</div>
    </>
    }
     </>
  )
}

export default AuthLinks