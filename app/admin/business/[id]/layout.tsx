import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/themeprovider/themeprovider";

import { Inter as FontSans } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Sidebar from "@/components/assets/sidebar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <div className="">
      <div className="flex flex-row items-center mx-auto  w-full max-w-6xl gap-8 my-8">
          <h1 className="text-3xl font-semibold">Business Name</h1>
          <h1 className="text-2xl font-semibold">94567028XX</h1>
        </div>
{children}
 </div>
   
  );
}
