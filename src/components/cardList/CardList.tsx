import React from 'react'
import styles from "./cardList.module.css"
import Pagination from '../pagination/Pagination'
import PostCard from '../postCard/PostCard'
import Paginate from '../pagination/Pagination'

const getData=async(page,cat)=>{
  const res=await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache:"no-store"
    }
  );
  if(!res.ok){
    throw new Error("Failed");
  }
 return res.json();
}
const CardList = async({page,cat,isBlog}) => {
  const {posts,count}=await getData(page,cat);
  const POST_PER_PAGE=2;
  const lastPage=Math.ceil(count/POST_PER_PAGE);
  return (
    <div className={styles.container}>
          <div className="mt-20 xl:mb-20 mb-10 text-3xl font-bold">Recent Posts</div>
          {posts?.map(item=>(
          <PostCard item={item} key={item._id}/>
        ))}
        <Paginate page={page} lastPage={lastPage} isBlog={isBlog} cat={cat}/>
    </div>
  )
}

export default CardList