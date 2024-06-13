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


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBump = (props : any) =>
 ( // @ts-ignore
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

export default function General() {
  const chartData = [
    {
      id: "Active Accounts",
      data: [
        {
          x: "May",
          y: 6,
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
    {
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
    {
      id: "Complaints",
      data: [
        {
          x: "May",
          y: 7,
        },
        {
          x: "June",
          y: 4,
        },
        {
          x: "July",
          y: 12,
        },
        {
          x: "August",
          y: 7,
        },
        {
          x: "September",
          y: 10,
        },
      ],
    },
    {
      id: "Sign Ups",
      data: [
        {
          x: "May",
          y: 12,
        },
        {
          x: "June",
          y: 6,
        },
        {
          x: "July",
          y: 6,
        },
        {
          x: "August",
          y: 5,
        },
        {
          x: "September",
          y: 11,
        },
      ],
    },
  ];
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className="h-[400px] dark:text-white">

      <div className="flex flex-col justify-end bg-blue-400">
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>

      </div>
      
      <MyResponsiveBump data={chartData} className="text-white" />
    </div>
  );
}
