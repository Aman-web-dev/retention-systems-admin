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
import BusinessTable from "@/components/graphs/businessTable";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { UniversalCard } from "@/components/assets/UniversalCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import { PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import WaveChart from "@/components/graphs/waveChart";
import { PanelDropDown } from "@/components/assets/PanelDropDown";
import {FakeTable} from "@/components/graphs/Table";
import ChatBotPerformance from "./sections/chatBotPerfomrance";
import { UserEngagement } from "./sections/userEngagement";
import { QueryAnalysis } from "./sections/queryAnalysis";
import { ConversionMetrics } from "./sections/conversionMetrics";

export default function BusinessPage() {
  const params = useParams();
  const businessId = params.id;

  return (
    <Tabs defaultValue="UserEngagement" className="w-[90%]">
      <div className="flex">
        <div className="lg:hidden">
          <PanelDropDown />
        </div>
        <TabsList className="hidden lg:flex">
          <TabsTrigger value="UserEngagement">User Engagement</TabsTrigger>
          <TabsTrigger value="ChatBotPerformance">
            Chat Bot Performance
          </TabsTrigger>
          <TabsTrigger value="conversionMetrics" className="hidden sm:flex">
            Conversion Metrics
          </TabsTrigger>
          <TabsTrigger value="queryAnalysis">User Query Analysis</TabsTrigger>

        </TabsList>

        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <Link
              href={`/admin/business/${businessId}/settings`}
              className="flex flx-col gap-2 items-center"
            >
              <Settings className="h-3.5 w-3.5" />
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
        <QueryAnalysis />
      </TabsContent>

      <TabsContent value="conversionMetrics">
        <ConversionMetrics />
      </TabsContent>
    </Tabs>
  );
}
