
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useState, useEffect } from "react";

export default async function Test() {

  async function getData() {
    const res = await fetch("https://retention-systems.vercel.app/business");
    const data = await res.json();
    console.log(data);
    return data;
  }

let data = await getData()

  return (
    <div className="gap-4">
      <Suspense fallback={<SuspenseElem />}>
      <MainElem />
      </Suspense>
    </div>
  );
}

const SuspenseElem = () => {
  return (
    <div className="flex items-center space-x-4 bg-gray-400">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

const MainElem = () => {
  return <div className="bg-blue-400">Hello World!</div>;
};