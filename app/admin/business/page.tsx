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

import WaveChart from "@/components/graphs/waveChart";
import FakeTable from "@/components/graphs/Table";
import {
  ActiveAccountHeadings,
  ActiveAccountData,
} from "@/components/data/tableData/ActiveAccountData";
import {
  InactiveAccountData,
  InactiveAccountHeadings,
} from "@/components/data/tableData/InactiveAccountData";
import {
  DraftAccountData,
  DraftAccountHeadings,
} from "@/components/data/tableData/DraftAccountData";
import {AllAccountData,AllAccountHeadings} from '@/components/data/tableData/allAccountData'

export default  function Dashboard() {
 

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
      <TabsContent value="all">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <FakeTable
            title="All Business"
            description="Here wil be all the Business Accounts"
            headings={AllAccountHeadings}
            data={AllAccountData}
          />
        </div>
      </TabsContent>

      <TabsContent value="active">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <FakeTable
            title="Active Business"
            description="Here wil be all the Active Business Accounts"
            headings={ActiveAccountHeadings}
            data={ActiveAccountData}
          />
        </div>
      </TabsContent>

      <TabsContent value="inactive">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <FakeTable
            title="Inactive Business"
            description="Here wil be all the Inactive Business Accounts"
            headings={InactiveAccountHeadings}
            data={InactiveAccountData}
          />
        </div>
      </TabsContent>

      <TabsContent value="draftAccounts">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <FakeTable
            title="Draft Business"
            description="Here will Be all the Draft Business Accounts"
            headings={DraftAccountHeadings}
            data={DraftAccountData}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}
