"use client"
import React from 'react'
import styles from './loginPage.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const LoginPage = () => {
  const {status}=useSession();
  const router=useRouter();
  console.log(status);
  if(status==="loading") return (
    <div>Loading...</div>
  )
  if(status==="authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.title}>Login</div>
        <div className={styles.button}>
            <button className={styles.login} onClick={()=>signIn("google")}>Sign in with Google</button>
            <div className={styles.logo}><GoogleIcon /></div>
        </div>
        {/* <div className={styles.button}>
            <button className={styles.login} onClick={()=>signIn("linkedin")}>Sign in with Apple</button>
            <div className={styles.logo}><AppleIcon /></div>
        </div>
        <div className={styles.button}>
            <button className={styles.login}>Sign in with Facebook</button>
            <div className={styles.logo}><FacebookIcon/></div>
        </div> */}
        </div>
    </div>
  )
}

export default LoginPage