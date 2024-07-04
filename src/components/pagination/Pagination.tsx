import React from 'react'
import styles from "./pagination.module.css"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const Paginate = ({page,lastPage,isBlog,cat}) => {
  return (
    <div>
      <Pagination >
  <PaginationContent >
    {page!==1 &&
    <PaginationItem>
      {cat && <PaginationPrevious href={`http://localhost:3000/blog?cat=${cat}&page=${page-1}`}/>}
      {isBlog==="1" && !cat && <PaginationPrevious href={`http://localhost:3000/blog?page=${page-1}`}/>}
      {isBlog!=="1" && <PaginationPrevious href={`http://localhost:3000?page=${page-1}`}/>}
    </PaginationItem>}
    <PaginationItem>
      {cat && <PaginationLink href={`http://localhost:3000/blog?cat=${cat}&page=1`}>1</PaginationLink>}
      {isBlog==="1" && !cat && <PaginationLink href={`http://localhost:3000/blog?page=1`}>1</PaginationLink>}
      {isBlog!=="1" && <PaginationLink href={`http://localhost:3000?page=1`}>1</PaginationLink>}
    </PaginationItem>
    <PaginationItem>
      {cat && <PaginationLink href={`http://localhost:3000/blog?cat=${cat}&page=2`}>2</PaginationLink>}
      {isBlog==="1" && !cat && <PaginationLink href={`http://localhost:3000/blog?page=2`}>2</PaginationLink>}
      {isBlog!=="1" && <PaginationLink href={`http://localhost:3000?page=2`}>2</PaginationLink>}
    </PaginationItem>
    <PaginationItem>
      {cat && <PaginationLink href={`http://localhost:3000/blog?cat=${cat}&page=3`}>3</PaginationLink>}
      {isBlog==="1" && !cat && <PaginationLink href={`http://localhost:3000/blog?page=3`}>3</PaginationLink>}
      {isBlog!=="1" && <PaginationLink href={`http://localhost:3000?page=3`}>3</PaginationLink>}
    </PaginationItem>
    {page!==lastPage &&
    <PaginationItem>
      {cat && <PaginationNext href={`http://localhost:3000/blog?cat=${cat}&page=${page+1}`} />}
      {isBlog==="1" && !cat && <PaginationNext href={`http://localhost:3000/blog?page=${page+1}`} />}
      {isBlog!=="1" && <PaginationNext href={`http://localhost:3000?page=${page+1}`} />}
    </PaginationItem>}
  </PaginationContent>
</Pagination>

    </div>
  )
}

export default Paginate