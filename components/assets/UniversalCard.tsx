import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

interface CardProps {
  Heading: string;
  value: string;
  Description: string;
  progress: number;
}

export function UniversalCard({
  Heading,
  value,
  Description,
  progress,
}: CardProps) {
  return (
    <Card x-chunk="dashboard-05-chunk-1 flex-1">
      <div className=" flex flex-col justify-between h-full items-center">
        <CardHeader className="pb-2 text-center ">
          <CardTitle className="text-sm ">{Heading}</CardTitle>
          <CardTitle className="text-4xl px-4">{value}</CardTitle>
          <CardDescription>{Description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground text-center">
            {25 + "%"} from last week
          </div>
        </CardContent>
      </div>
    </Card>
  );
  
}
