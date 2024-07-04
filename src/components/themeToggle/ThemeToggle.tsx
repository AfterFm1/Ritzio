"use client"
import React, { useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from '@/context/ThemeContext';
const ThemeToggle = () => {
  const {theme,toggle}=useContext(ThemeContext);
  return (
    <div className="cursor-pointer w-14 h-6 rounded-full flex items-center justify-between relative" onClick={toggle} style={theme==="dark"?{background:"white"}:{background:"#0f172a"}}>
      <DarkModeIcon style={{color:"#FDB813",fontSize:"20px"}} />
      <div className="h-5 w-5 rounded-full  absolute" style={theme==="dark"?{background:"#0f172a",left:"1px"}:{background:"white",right:"1px"}}></div>
      <LightModeIcon style={{color:"#FDB813",fontSize:"20px"}}/>
    </div>
  )
}

export default ThemeToggle