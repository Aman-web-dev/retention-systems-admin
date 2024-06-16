
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DialogWrapper } from "@/components/assets/editDialogue";
import CreateBusinessForm from "@/components/assets/createBusinessform";

import { Suspense } from "react";

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
import ListSkeletonDemo from "@/components/skeletons/ListSkeleton";



export default async function Dashboard() {

  async function getData() {
    const res = await fetch("https://retention-systems.vercel.app/business");
    const data = await res.json();
    console.log(data);
    return data;
  }

let data = await getData()

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Drafts
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
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
      {
        data && <TabsContent value="all">
        <Suspense fallback={<p>Loading...</p>}>
        <BusinessTable businesses={data} />
        </Suspense>
      </TabsContent>
      }
     
      <TabsContent value="active">
      <Suspense fallback={<p>Loading...</p>}>
        <BusinessTable businesses={data} />
        </Suspense>
      </TabsContent>

      <TabsContent value="active">
      <Suspense fallback={<p>Loading...</p>}>
        <BusinessTable businesses={data} />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
}
