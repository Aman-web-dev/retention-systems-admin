
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

import BusinessTable from "@/components/graphs/businessTable";
import { BusinessData } from "@/types/businessdata";
import { useEffect } from "react";
import ListSkeletonDemo from "@/components/skeletons/ListSkeleton";
import { UniversalCard } from "@/components/assets/UniversalCard";
import WaveChart from "@/components/graphs/waveChart";

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
          <TabsTrigger value="draftAccounts" className="hidden sm:flex">
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
             <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
      </div>
        <Suspense fallback={<p>Loading...</p>}>
        <BusinessTable businesses={data} />
        </Suspense>
      </TabsContent>
      }
     
      <TabsContent value="active">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
      </div>
      <WaveChart/>
      <WaveChart/>
    </div>
      </TabsContent>

      <TabsContent value="inactive">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
      </div>
      <WaveChart/>
    </div>
      </TabsContent>

      <TabsContent value="draftAccounts">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
      </div>
      <WaveChart/>
    </div>
      </TabsContent>
    </Tabs>
  );
}
