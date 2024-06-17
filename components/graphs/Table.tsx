import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from 'lucide-react';

interface Heading {
  key: string;
  label: string;
  hiddenOn?: string;
}

interface FakeTableProps {
  title: string;
  description: string;
  headings: Heading[];
  data: Record<string, any>[];
}

export function FakeTable({ title, description, headings, data }: FakeTableProps) {
  return (
    <Card x-chunk="dashboard-06-chunk-0 ">
      <CardHeader className="">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {headings.map((heading) => (
                <TableHead key={heading.key} className={heading.hiddenOn || ''}>
                  {heading.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {headings.map((heading) => (
                  <TableCell key={heading.key} className={heading.hiddenOn || 'py-8'}>
                 
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

export default FakeTable;



