
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";


export default function Home({searchParams}:{searchParams:any}) {
  const page=parseInt(searchParams.page) || 1;
  const cat="";
  const isBlog="";
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className="flex gap-12">
        <CardList page={page} cat={cat} isBlog={isBlog}/>
        <Menu/>
      </div>

    </div>
  )
}
