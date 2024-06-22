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
import { Card } from "@/components/ui/card";
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
import { Suspense } from "react";
import { GraphSkeletonCard } from "@/components/skeletons/GraphSkeleton";
import { UniversalCard } from "@/components/assets/UniversalCard";
import { accountAnalyticsData } from "@/components/data/graphData/accountAnalyticsData";
import { EngagementAnalyticsData } from "@/components/data/graphData/engagementAnalyticsData";
import {Complaints} from "@/components/data/graphData/complaintsData"
import {feedbackData} from "@/components/data/graphData/feedbackData"


import * as React from "react";

export default function HomePage() {
  return (
    <>
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <UniversalCard
          Heading="Active Accounts"
          value="200"
          progress={45}
          Description="Currently active user accounts."
        />
        <UniversalCard
          Heading="Inactive Accounts"
          value="50"
          progress={95}
          Description="Accounts not used recently."
        />
        <UniversalCard
          Heading="Draft Accounts"
          value="10"
          progress={65}
          Description="Accounts in draft mode."
        />
        <UniversalCard
          Heading="Complaints Feedbacks"
          value="500"
          progress={25}
          Description="User complaints and feedback."
        />
      </div>
  
      <Suspense fallback={<GraphSkeletonCard />}>
        <WaveChart
          metadata={{
            title: "Account Analytics",
            description: "Shows active and inactive accounts.",
          }}
          data={accountAnalyticsData}
        />
      </Suspense>
  
      <WaveChart
        metadata={{
          title: "Engagement Analytics",
          description: "Signups and website visits.",
        }}
        data={EngagementAnalyticsData}
      />
  
      <WaveChart
        metadata={{
          title: "Complaints",
          description: "Number of complaints received.",
        }}
        data={Complaints}
      />
  
      <WaveChart
        metadata={{
          title: "Feedbacks",
          description: "Number and types of feedback.",
        }}
        data={feedbackData}
      />
    </div>
  </>
  );
}
