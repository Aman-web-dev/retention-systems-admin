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

import { CardHeader, CardDescription, CardTitle } from "../ui/card";

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

import { Card } from "../ui/card";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface ChartDataType {
  id: string;
  data: {
    x: string;
    y: number;
  }[];
}

interface WaveChartProps {
  data: Record<string, ChartDataType>;
  metadata: {
    title: string;
    description: string;
  };
}

export default function WaveChart({ data, metadata }: WaveChartProps) {
  const firstKey = Object.keys(data)[0];
  const [selectedDataKeys, setSelectedDataKeys] = React.useState<string[]>([
    firstKey,
  ]);

  const handleCheckedChange = (key: string, checked: boolean) => {
    setSelectedDataKeys((prev) =>
      checked ? [...prev, key] : prev.filter((k) => k !== key)
    );
  };

  const currentData = selectedDataKeys.map((key) => data[key]);

  return (
    <Card x-chunk="dashboard-05-chunk-2">
      <div className="flex flex-col h-[500px] w-[95%] dark:text-white justify-end ">
        <CardHeader className="pb-2">
          <CardTitle>{metadata.title}</CardTitle>
          <CardDescription>{metadata.description}</CardDescription>
        </CardHeader>
        <div className="flex flex-col justify-end w-40 m-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Select Data</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Data</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Object.keys(data).map((key) => (
                <DropdownMenuCheckboxItem
                  key={key}
                  checked={selectedDataKeys.includes(key)}
                  onCheckedChange={(checked) =>
                    handleCheckedChange(key, checked)
                  }
                >
                  {data[key].id}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <MyResponsiveBump data={currentData} className="text-white" />
      </div>
    </Card>
  );
}
