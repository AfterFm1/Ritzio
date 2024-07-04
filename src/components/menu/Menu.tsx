import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Author from '../author/Author'
import BestPost from '../bestPost/BestPost'

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className="mt-20">
        <div className={styles.subtitle}>Explore our Handpicked choices</div>
        <div className="text-2xl font-bold">Our Top Picks</div>
        <BestPost link={"/posts/Ten%20Fashion%20Mistakes%20to%20Avoid"} img={"/profile.png"} name={"ADITYA SINGH"} date={"2024-07-01"} cat={"Fashion"} title={"Ten Fashion Mistakes to Avoid"} />
        <BestPost link={"/posts/Anticipation%20Builds:%20What%20to%20Expect%20from%20GTA%206%20in%202025."} img={"/profile.png"} name={"ADITYA SINGH"} date={"2024-07-02"} cat={"Gaming"} title={"Anticipation Builds: What to Expect from GTA 6 in 2025."}/>
        <BestPost link={"/posts/All%2019%20Songs%20on%20Travis%20Scott’s%20‘UTOPIA’%20Ranked"} img={"/profile.png"} name={"ADITYA SINGH"} date={"2024-07-03"} cat={"Music"} title={"All 19 Songs on Travis Scott’s ‘UTOPIA’ Ranked"}/>
        <BestPost link={"/posts/The%20Best%20Restaurant%20in%20the%20World%20Tricks%20You%20Into%20Thinking%20It’s%20Good"} img={"/profile.png"} name={"ADITYA SINGH"} date={"2024-07-04"} cat={"Food"} title={"The Best Restaurant in the World Tricks You Into Thinking It’s Good"}/>
      </div>
      <div>
        <div className={styles.subtitle}>Explore More</div>
        <div className="text-2xl font-bold">Categories</div>
        <div className="flex flex-wrap gap-5 mt-11">
          <Link href="/blog/?cat=gaming" className={`${styles.category} ${styles.sports}`}>Gaming</Link>
          <Link href="/blog/?cat=spirituality" className={`${styles.category} ${styles.education}`}>Spirituality</Link>
          <Link href="/blog/?cat=food" className={`${styles.category} ${styles.politics}`}>Food</Link>
          <Link href="/blog/?cat=music" className={`${styles.category} ${styles.books}`}>Music</Link>
          <Link href="/blog/?cat=coding" className={`${styles.category} ${styles.humor}`}>Coding</Link>
          <Link href="/blog/?cat=fashion" className={`${styles.category} ${styles.fitness}`}>Fashion</Link>
        </div>
      </div>
       <div>
        <div className={styles.subtitle}>Who to follow</div>
        <div className="text-2xl font-bold">You might like</div>
        <Author img={"/images.jpeg"} name={"Travis Scott"}     desc={"I make songs for utopian world.."}/>
        <Author img={"/images1.jpg"} name={"The Weeknd"}       desc={"If it ain't XO, then it gotta go"}/>        
        <Author img={"/images2.jpeg"} name={"Mark Zuckerberg"} desc={"Working on new AR glasses and..."}/>        
        <Author img={"/images3.jpg"} name={"Sam Altman"}       desc={"Generative AI is the future....."}/>     
       </div>
    </div>
  )
}

export default Menu