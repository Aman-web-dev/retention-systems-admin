// app/page.js
"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DialogWrapper } from "@/components/assets/editDialogue";
import CreateBusinessForm from "@/components/assets/createBusinessform";



import { Suspense } from 'react';


import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BusinessTable from "@/components/assets/businessTable";
import { BusinessData } from "@/types/businessdata";
import { useEffect } from "react";

async function getData() {
  const res = await fetch('https://retention-systems.vercel.app/business');
  const data = await res.json()
  console.log(data)
  return data
}




export default function Dashboard() {
  const [data, setData] = useState<BusinessData[]>([]); // Initialize as empty array

  useEffect(() => {
      const fetchData = async () => {
          const fetchedData = await getData();
          setData(fetchedData); // Update state when data is fetched
      };

      fetchData(); // Call the async function within useEffect
  }, []); // Empty dependency array ensures this runs once after the component mounts



  return (
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <Link href={"/admin/business/createbusiness"}>
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add Business
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            <Suspense fallback={<Loading/>}>
            <BusinessTable businesses={data}/>
            </Suspense>
        
          </Tabs>

  );
}



function Loading(){
  return(
    <>
    loading....
    </>
  )
}