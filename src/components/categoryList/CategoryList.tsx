import React from 'react'
import styles from "./categoryList.module.css"
import Card from '../card/Card'

const getData=async()=>{
    const res=await fetch("http://localhost:3000/api/categories",
      {
        cache:"no-store"
      }
    );
    if(!res.ok){
      throw new Error("Failed");
    }
   return res.json();
}
const CategoryList = async() => {
  const data= await getData()
  return (
    <div className="md:mt-8 sm:mt-1">
      <div className="mb-16 text-3xl font-bold">Popular Categories</div>
      <div className="flex flex-wrap sm:gap-10 md:gap-20 lg:gap-8 gap-10">
        {data?.map(item=>(
      <Card cat={item.title} img={item.img} key={item._id}/>
    )
       ) }
      </div>
    </div>
  )
}

export default CategoryList