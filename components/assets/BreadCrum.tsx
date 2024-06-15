"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbSegment {
  text: string; // The displayed text of the segment
  path: string; // The path this segment links to
}

import Link from "next/link";
const BreadcrumbComponent = () => {
  const [page, setPage] = useState<BreadcrumbSegment[] | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof pathname === 'string' && pathname.trim() !== '/') {
      const segments = pathname.split('/').filter(Boolean);
      const breadcrumbSegments: BreadcrumbSegment[] = segments.map((segment, index) => ({
        text: segment,
        path: `/${segments.slice(0, index + 1).join('/')}`,
      }));
      setPage(breadcrumbSegments);
    } else {
      setPage(null);
    }
  
  }, [pathname]);

  if (!page || page.length === 0) {
    return null; // Don't render breadcrumbs if there are none
  }

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {page.length > 0
          ? page.map((elem) => {
              return (
                <>
                  <BreadcrumbItem>
                  {elem.text=='admin'?<BreadcrumbLink asChild>
                      <Link href={'/'}>{"Home"}</Link>
                    </BreadcrumbLink>: <BreadcrumbLink asChild>
                      <Link href={elem.path}>{elem.text.toUpperCase()}</Link>
                    </BreadcrumbLink>}
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              );
            })
          : ""}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
