import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect"
export const GET=async(req,{params})=>{
      const {slug}=params;
      try{
      const post= await prisma.post.findUnique({where:{slug},include:{user:true}});
      return new NextResponse(JSON.stringify(post,{status:200}));
    }catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({message:"Something went wrong"},{status:500}));
    }
}