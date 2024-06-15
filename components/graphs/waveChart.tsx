"use client";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bump
import { ResponsiveBump } from "@nivo/bump";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { CardHeader,CardDescription,CardTitle } from "../ui/card";

const MyResponsiveBump = (
  // @ts-ignore
  props: any
) => (
  // @ts-ignore
  <ResponsiveBump
    data={props.data}
    colors={{ scheme: "spectral" }}
    lineWidth={3}
    activeLineWidth={6}
    inactiveLineWidth={3}
    inactiveOpacity={0.15}
    pointSize={10}
    activePointSize={16}
    inactivePointSize={0}
    pointColor={{ theme: "background" }}
    pointBorderWidth={3}
    activePointBorderWidth={3}
    pointBorderColor={{ from: "serie.color" }}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: -36,
      truncateTickAt: 0,
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "ranking",
      legendPosition: "middle",
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
    axisRight={null}
  />
);

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface dataType {
  x: string,
  y: number,
}
interface chartDataType{
  id: string,
  data:dataType[] ,
}

export default function WaveChart() {
  const chartData = {
  active:{
      id: "Active Accounts",
      data: [
        {
          x: "May",
          y: 60,
        },
        {
          x: "June",
          y: 2,
        },
        {
          x: "July",
          y: 5,
        },
        {
          x: "August",
          y: 1,
        },
        {
          x: "September",
          y: 12,
        },
      ],
    },
   inactive: {
      id: "Inactive Accounts",
      data: [
        {
          x: "May",
          y: 9,
        },
        {
          x: "June",
          y: 12,
        },
        {
          x: "July",
          y: 10,
        },
        {
          x: "August",
          y: 4,
        },
        {
          x: "September",
          y: 2,
        },
      ],
    },
  }


  const [showActiveAccounts, setshowActiveAccounts] = React.useState<Checked>(true);
  const [showInactiveAccounts, setshowInactiveAccounts] = React.useState<Checked>(false);
  const [currentData, setCurrentData] = React.useState<chartDataType[]>([]);


  React.useEffect(()=>{
    const newData: chartDataType[] = [];

    if (showActiveAccounts) newData.push(chartData.active);
    if (showInactiveAccounts) newData.push(chartData.inactive);

    setCurrentData(newData);
  }, [showActiveAccounts, showInactiveAccounts]);

  return (
    <div className="flex flex-col h-[500px] w-[95%] dark:text-white  justify-end ">
        <CardHeader className="pb-2">
            <CardTitle className="text-4xl">Title</CardTitle>
            <CardDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, autem iste possimus placeat, magni at quisquam soluta debitis nemo quidem dolor iure, praesentium sequi impedit suscipit! Expedita labore nisi laboriosam!</CardDescription>

      </CardHeader>
      <div className="flex flex-col justify-end  w-40 m-4">
    
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Select</Button>
          </DropdownMenuTrigger>  
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Data</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showActiveAccounts}
              onCheckedChange={setshowActiveAccounts}
            >
            Active Accounts
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showInactiveAccounts}
              onCheckedChange={setshowInactiveAccounts}
            >
            Inactive Accounts
            </DropdownMenuCheckboxItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <MyResponsiveBump data={currentData} className="text-white" />
    </div>
  );
}
