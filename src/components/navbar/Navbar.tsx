"use client";
import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeContext } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const {status,data:session}=useSession();
  const handleClick=()=>{
    signOut();
  }
  console.log(session);
  return (
    <div className="flex items-center justify-between h-24">
      <div className="hidden flex-1 gap-3 items-center sm:flex">
        <Link href="https://www.linkedin.com/in/aditya-singh-0a1123239/">
          <LinkedInIcon style={{ color: "blue" }} />
        </Link>
        <Link href="https://x.com/guddixo">
          <XIcon
            style={
              theme === "dark"
                ? { color: "white", fontSize: "20px" }
                : { color: "black", fontSize: "20px" }
            }
          />
        </Link>
        <Link href="https://www.instagram.com/traprnbking?igsh=bm5haTBoYzM3Ym91">
          <InstagramIcon style={{ color: "#E1306C" }} />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61560621833060&mibextid=ZbWKwL">
          <FacebookIcon style={{ color: "blue" }} />
        </Link>
      </div>
      <div className="flex-1 sm:text-3xl text-2xl font-bold cursor-pointer sm:text-center text-left">
        <Link href="/">Ritzio</Link>
      </div>
      <div className="flex flex-1 sm:gap-3 gap-2 justify-end items-center">
        <ThemeToggle />
        <AuthLinks />
        { status==="authenticated" && session.user &&
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image ?? undefined} />
              <AvatarFallback>{session.user.name?.substring(0,2)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleClick} className="cursor-pointer">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
}
      </div>
    </div>
  );
};

export default Navbar;
