import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
const BlogPage = ({searchParams}) => {
  const page=parseInt(searchParams.page) || 1;
  const cat=searchParams.cat;
  const isBlog="1";
  return (
    <div>
       <div style={{color:'var(--textColor'}} className="mt-10 text-center font-bold text-3xl capitalize">{cat} Blogs</div>
       <div className="flex gap-12">
          <CardList page={page} cat={cat} isBlog={isBlog}/>
          <Menu/>
       </div>
    </div>
  )
}

export default BlogPage