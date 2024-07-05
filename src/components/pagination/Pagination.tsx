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

const Paginate = ({page,lastPage,isBlog,cat}:{page:any,lastPage:any,isBlog:any,cat:any}) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return (
    <div>
      <Pagination >
  <PaginationContent >
    {page!==1 &&
    <PaginationItem>
      {cat && <PaginationPrevious href={`${apiBaseUrl}/blog?cat=${cat}&page=${page-1}`}/>}
      {isBlog==="1" && !cat && <PaginationPrevious href={`${apiBaseUrl}/blog?page=${page-1}`}/>}
      {isBlog!=="1" && <PaginationPrevious href={`${apiBaseUrl}?page=${page-1}`}/>}
    </PaginationItem>}
    <PaginationItem>
      {cat && <PaginationLink href={`${apiBaseUrl}/blog?cat=${cat}&page=1`}>1</PaginationLink>}
      {isBlog==="1" && !cat && <PaginationLink href={`${apiBaseUrl}/blog?page=1`}>1</PaginationLink>}
      {isBlog!=="1" && <PaginationLink href={`${apiBaseUrl}?page=1`}>1</PaginationLink>}
    </PaginationItem>
    <PaginationItem>
      {cat && <PaginationLink href={`${apiBaseUrl}/blog?cat=${cat}&page=2`}>2</PaginationLink>}
      {isBlog==="1" && !cat && <PaginationLink href={`${apiBaseUrl}/blog?page=2`}>2</PaginationLink>}
      {isBlog!=="1" && <PaginationLink href={`${apiBaseUrl}?page=2`}>2</PaginationLink>}
    </PaginationItem>
    <PaginationItem>
      {cat && <PaginationLink href={`${apiBaseUrl}/blog?cat=${cat}&page=3`}>3</PaginationLink>}
      {isBlog==="1" && !cat && <PaginationLink href={`${apiBaseUrl}/blog?page=3`}>3</PaginationLink>}
      {isBlog!=="1" && <PaginationLink href={`${apiBaseUrl}?page=3`}>3</PaginationLink>}
    </PaginationItem>
    {page!==lastPage &&
    <PaginationItem>
      {cat && <PaginationNext href={`${apiBaseUrl}/blog?cat=${cat}&page=${page+1}`} />}
      {isBlog==="1" && !cat && <PaginationNext href={`${apiBaseUrl}/blog?page=${page+1}`} />}
      {isBlog!=="1" && <PaginationNext href={`${apiBaseUrl}?page=${page+1}`} />}
    </PaginationItem>}
  </PaginationContent>
</Pagination>

    </div>
  )
}

export default Paginate
