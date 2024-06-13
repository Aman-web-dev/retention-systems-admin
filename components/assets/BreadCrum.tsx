'use client'

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { useState,useEffect } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
 
import Link from 'next/link';
const BreadcrumbComponent = () => {
  const [page,setPage]=useState([""])
  const path = usePathname()
  console.log(path)

useEffect(()=>{
  const str = path;
  const arr = str.split('/');
  console.log(arr);
  setPage(arr)
},[path])

  return (
    <Breadcrumb className="hidden md:flex">

   

      
      <BreadcrumbList>
      {page.length>1?page.map((elem)=>{
        return (
          <>
          {
            elem===""?<BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">{"Home"}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>:""
          }
          <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">{elem.toUpperCase()}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        </>
        )
        
        
      }):""}
        {/* <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
       
        {path === '/admin/business' ?(
          <>
           <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/admin/business">Business</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          </>
        ): null  }

{path === '/admin/settings' ?(
          <>
           <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/admin/settings">Settings</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          </>
        ): null  }


{path === '/admin/business/' ?(
          <>
           <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/admin/settings">Settings</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          </>
        ): null  } */}
    
      </BreadcrumbList>
    </Breadcrumb>
  );
};


export default BreadcrumbComponent