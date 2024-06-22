import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";
import { title } from "process";

interface CardProps {
  Heading: string;
  value: string;
  Description: string;
  progress: number;
  trend?: "up" | "down"; // Optional trend indicator
}

export function UniversalCard({
  Heading,
  value,
  Description,
  progress,
  trend = "down", // Default to "up" trend
}: CardProps) {
  const trendColor = trend === "up" ? "text-green-500" : "text-red-500";
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;

  return (
    <Card x-chunk="dashboard-05-chunk-1">
    <CardHeader className="pb-2">
      <div className="min-h-[10%]">
      <CardTitle className="text-lg ">{Heading}</CardTitle>
      </div>
    <CardTitle className="text-4xl">{value}</CardTitle>

      <CardDescription>{Description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground">
        +25% from last week
      </div>
    </CardContent>
 
  </Card>
  );
}
