'use client'

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react"
import { Badge } from "lucide-react";
import Link from "next/link";
interface Heading {
  key: string;
  label: string;
  hiddenOn?: string; // Potentially unused, but included for consistency with previous code
}

interface FakeTableProps {
  title: string;
  description: string;
  headings: Heading[];
  data: Record<string, any>[];
}

export  function FakeTable({ title, description, headings, data }: FakeTableProps) {
  const [selectedHeadings, setSelectedHeadings] = useState<Heading[]>(
    headings.slice(0, 3) // Show the first 3 columns by default
  );

  const handleCheckedChange = (heading: Heading, checked: boolean) => {
    setSelectedHeadings((prev) =>
      checked ? [...prev, heading] : prev.filter((h) => h.key !== heading.key)
    );
  };
  const handleRowClick = (business_phoneNumber: string) => {
    window.location.href = `/admin/business/${business_phoneNumber}`;
  };

  return (
    <Card>

      <div className="flex md:flex-row items-center justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <DropdownMenu >
          <DropdownMenuTrigger asChild>
          <Button variant={"secondary"} className="mr-8">
                Select Data
                
              <ChevronsUpDown className="ml-2 h-4 w-4 mr-4 shrink-0 opacity-100" />
                
                </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 my-8">
            <DropdownMenuLabel>Columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {headings.map((heading) => (
              <DropdownMenuCheckboxItem
                key={heading.key}
                checked={selectedHeadings.includes(heading)}
                onCheckedChange={(checked) =>
                  handleCheckedChange(heading, checked)
                }
              >
                {heading.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    

      <CardContent>
       

        <Table>
          <TableHeader>
            <TableRow>
              {selectedHeadings.map((heading) => (
                <TableHead key={heading.key}>{heading.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
          {data.map((row, index) => (
            <TableRow 
              key={index} 
              onClick={() => handleRowClick(row.businessNumber)} // Add onClick handler
              className="cursor-pointer" // Add cursor for visual cue
            >
              {selectedHeadings.map((heading) => (
                <TableCell key={heading.key} className="py-8">
                  <div className="font-medium">{row[heading.key]}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
