"use client";
import Image from "next/image";
import Link from "next/link";
import WaveChart from "@/components/graphs/waveChart";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import * as React from "react";

export default function HomePage() {
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4">
        
         <CardComponent/>
         <CardComponent/>
         <CardComponent/>
         <CardComponent/>
        </div>
        <Card x-chunk="dashboard-05-chunk-2">
          <WaveChart />
        </Card>
        <Card x-chunk="dashboard-05-chunk-2">
          <WaveChart />
        </Card>
        <Card x-chunk="dashboard-05-chunk-2">
          <WaveChart />
        </Card>
        <Card x-chunk="dashboard-05-chunk-2">
          <WaveChart />
        </Card>
      </div>
    </>
  );
}



const CardComponent=()=>{
  return (
    <Card x-chunk="dashboard-05-chunk-1">
    <CardHeader className="pb-2">
      <CardTitle className="text-4xl">$1,329</CardTitle>
      <CardDescription>This Week</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground">
        +25% from last week
      </div>
    </CardContent>
    <CardFooter>
      <Progress value={25} aria-label="25% increase" />
    </CardFooter>
  </Card>
  )
}