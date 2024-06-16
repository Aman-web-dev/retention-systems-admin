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
    Description: string;
  }
  
  export function UniversalCard({ Heading, Description }: CardProps) {
    return (
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl">{Heading}</CardTitle>
          <CardDescription>{Description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {} from last week
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={25} aria-label="25% increase" />
        </CardFooter>
      </Card>
    );
  }