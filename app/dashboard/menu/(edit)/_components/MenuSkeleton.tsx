import { Skeleton } from "@/components/ui/skeleton";

export default function MenuSkeleton() {
  return (
    <div className="flex w-full h-full">
      <div className="w-56 border-r border-gray-300 bg-white pt-5 px-2 sticky top-[70px]" style={{ height: "calc(100vh - 70px)" }}>
        <div className="flex gap-3 items-center mb-6">
          <Skeleton className="size-8 rounded-[999px]" />
          <div>
            <Skeleton className="w-24 h-2 rounded-[999px] mb-1" />
            <Skeleton className="w-32 h-4 rounded-[999px] " />
          </div>
        </div>
        <div className="space-y-3">
          <Skeleton className="w-full h-[30px] rounded-xl" />
          <Skeleton className="w-full h-[30px] rounded-xl" />
          <Skeleton className="w-full h-[30px] rounded-xl" />
          <Skeleton className="w-full h-[30px] rounded-xl" />
          <Skeleton className="w-full h-[30px] rounded-xl" />
        </div>
        <div className="w-[88%] h-[1px] bg-gray-300 rounded-full mx-auto my-5"></div>
        <Skeleton className="w-full h-[30px] rounded-xl" />
      </div>

      <div className="w-full p-5 flex flex-col gap-5 max-w-[1100px] mx-auto">
        <div className="border border-gray-300 rounded-lg bg-white">
          <div className="group flex items-center justify-between gap-x-3 p-4 border-b border-gray-300">
            <Skeleton className="size-7 rounded-[100%]" />
            <Skeleton className="w-1/2 h-7 rounded-full" />
          </div>
          <div className="space-y-3 p-3">
            <Skeleton className="w-full h-7 rounded-full " />
            <Skeleton className="w-full h-7 rounded-full " />
            <Skeleton className="w-full h-7 rounded-full " />
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg bg-white">
          <div className="group flex items-center justify-between gap-x-3 p-4 border-b border-gray-300">
            <Skeleton className="size-7 rounded-[100%]" />
            <Skeleton className="w-1/2 h-7 rounded-full" />
          </div>
          <div className="space-y-3 p-3">
            <Skeleton className="w-full h-7 rounded-full " />
            <Skeleton className="w-full h-7 rounded-full " />
            <Skeleton className="w-full h-7 rounded-full " />
          </div>
        </div>
        <Skeleton className="w-full h-10 rounded-full " />
      </div>
    </div>
  );
}
