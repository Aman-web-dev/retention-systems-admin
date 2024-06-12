import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DialogWrapper } from "@/components/assets/editDialogue";
import CreateBusinessForm from "@/components/assets/createBusinessform";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BusinessData } from "@/types/businessdata";

function BusinessTable({ businesses }: { businesses: BusinessData[] }) {
  console.log("business", businesses);
  return (
    <div>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Business</CardTitle>
            <CardDescription>
              Manage your Clients and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Business Name</TableHead>
                  {/* <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Plan
                        </TableHead> */}
                  <TableHead className="hidden md:table-cell">
                    Business Number
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Created at
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {businesses.length > 1
                  ? businesses.map((business: BusinessData) => (
                      <TableRow key={business.business_number}>
                        <Link href={`/admin/dashboard/${business.business_number}`}>
                          <TableCell className="font-medium">
                            {business.business_name}
                          </TableCell>
                        </Link>

                        {/* <TableCell>
                          <Badge variant="outline">Active</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $59.99
                        </TableCell> */}
                        <TableCell className="hidden md:table-cell">
                          {business.business_number}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {business.created_at}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}

                              <DialogWrapper
                                trigger={
                                  <Button
                                    variant="outline"
                                    className="border-0 hover:bg-white"
                                  >
                                    Edit Business
                                  </Button>
                                }
                                title="Edit Business Profile"
                                description="Make changes to your profile here. Click save when you're done."
                                footer={
                                  <Button type="submit" className="border-0">
                                    Save Changes
                                  </Button>
                                }
                              >
                                <CreateBusinessForm
                                  buttonText="Save Changes"
                                  initialBusinessData={business}
                                />
                              </DialogWrapper>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  : ""}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong> products
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </div>
  );
}

export default BusinessTable;
