import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Sidebar from "@/components/assets/sidebar";
import { Header } from "@/components/assets/navbar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
  <div className="flex min-h-screen w-full flex-col bg-muted/40 p-16">
  <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

        <Sidebar />
        {/* <Header/> */}
        <main className="grid flex-1 items-start gap-4  sm:py-0 md:gap-8">
        {children}
        </main>
        </div>
        </div>
      </body>
    </html>
  );
}
