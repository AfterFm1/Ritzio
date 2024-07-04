import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="flex items-center justify-end  gap-4  mt-10">
      <div style={{color:'var(--textColor)'}} className="text-3xl sm:block hidden font-bold">Ritzio</div>
      <div style={{color:'var(--softTextColor)'}} className="sm:text-base text-sm">© {year} Ritzio. All rights reserved.</div>
    </div>
  )
}

export default Footer