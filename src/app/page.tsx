
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";


export default function Home({searchParams}) {
  const page=parseInt(searchParams.page) || 1;
  const cat="";
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className="flex gap-12">
        <CardList page={page} cat={cat}/>
        <Menu/>
      </div>

    </div>
  )
}