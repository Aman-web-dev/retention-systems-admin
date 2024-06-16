"use client";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { UniversalCard } from "@/components/assets/UniversalCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import { PlusCircle,Settings } from "lucide-react";
import Link from "next/link";
import WaveChart from "@/components/graphs/waveChart";

export default function BusinessPage() {
  const params = useParams();
  const businessId = params.id;

  return (
    <Tabs defaultValue="UserEngagement" className="w-[90%]">

      <div className="flex">
      <TabsList>
        <TabsTrigger value="UserEngagement">User Engagement</TabsTrigger>
        <TabsTrigger value="ChatBotPerformance">Chat Bot Performance</TabsTrigger>
        <TabsTrigger value="queryAnalysis">User Query Analysis</TabsTrigger>
        <TabsTrigger value="conversionMetrics" className="hidden sm:flex">
        Conversion Metrics
        </TabsTrigger>
      </TabsList>
      <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <Settings className="h-3.5 w-3.5" />
            <Link href={`/admin/business/${businessId}/settings`}>
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Settings
              </span>
            </Link>
          </Button>
        </div>

      </div>
    


      <TabsContent value="UserEngagement">
        <UserEngagement />
      </TabsContent>

      <TabsContent value="ChatBotPerformance">
        <ChatBotPerformance />
      </TabsContent>

      <TabsContent value="queryAnalysis">
        <QueryAnalysis/>
      </TabsContent>

      <TabsContent value="conversionMetrics">
        <ConversionMetrics/>
      </TabsContent>
    </Tabs>
  );
}

const UserEngagement = () => {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
      </div>
      <WaveChart/>
    </div>
  );
};

const ChatBotPerformance = () => {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
        <UniversalCard Heading="xyz" Description="fsbaskbasjkb" />
       
      </div>
      <WaveChart/>
      <WaveChart/>

    </div>
  );
};


const QueryAnalysis = () => {
  return (
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
  );
};



const   ConversionMetrics = () => {
  return (
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
  );
};