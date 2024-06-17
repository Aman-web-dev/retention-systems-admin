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
    value:string;
    Description: string;
    progress:number;
  }
  
  export function UniversalCard({ Heading,value, Description,progress }: CardProps) {
    return (
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2 text-center">
         
          <CardTitle className="text-xl ">{Heading}</CardTitle>
          <CardTitle className="text-4xl  px-4 ">{value}</CardTitle>
          <CardDescription>{Description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground text-center">
            {25+'%'} from last week
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={progress} aria-label="25% increase" />
        </CardFooter>
      </Card>
    );
  }