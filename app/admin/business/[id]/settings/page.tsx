"use client";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Dashboard() {
  const [position, setPosition] = React.useState("bottom");
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 ">
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Business Name</CardTitle>
                <CardDescription>
                  Used to identify your Business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Store Name" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Business Whatsapp Number</CardTitle>
                <CardDescription>
                  The Whatsapp Number Through which business&apos;s Customer
                  will connect to the Bot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input placeholder="Project Name" defaultValue="86302*****" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Industry Type</CardTitle>

                <CardDescription>The Type of business</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="w-56">
                      <Button variant="outline">Industry</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Industry Type</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={position}
                        onValueChange={setPosition}
                      >
                        <DropdownMenuRadioItem value="it">
                          IT
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="agriculture">
                          Agriculture
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="healthcare">
                          Healthcare
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="finance">
                          Finance
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="education">
                          Education
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="manufacturing">
                          Manufacturing
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="retail">
                          Retail
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="construction">
                          Construction
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="transportation">
                          Transportation
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="entertainment">
                          Entertainment
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </form>
              </CardContent>

              <CardHeader>
                <CardTitle>Employee Size</CardTitle>

                <CardDescription>
                  Number of Employes working at the business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="w-56">
                      <Button variant="outline">Employee Size</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Employee Size</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={position}
                        onValueChange={setPosition}
                      >
                        <DropdownMenuRadioItem value="top">
                          0-10
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">
                          10-50
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">
                          50-100
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Api Key</CardTitle>
                <CardDescription>
                  This key is essential for AI sensy To know your identity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="***************************************************" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Private App ID</CardTitle>
                <CardDescription>
                  Used to identify your Business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="*********************************************************" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Project Id</CardTitle>
                <CardDescription>
                  Used to identify your Business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="*********************************************************" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
