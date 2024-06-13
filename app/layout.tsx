import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/themeprovider/themeprovider";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
