import { Skeleton } from "@/components/ui/skeleton"

export default function ListSkeletonDemo() {
  return (
    <div className="flex items-center space-x-4 bg-gray-400">
      <Skeleton className="h-12 w-full rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}
