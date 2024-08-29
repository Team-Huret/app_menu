"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/lib/functions/string";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TopBar() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlug = slug.map((item) => decodeURIComponent(item));

  return (
    <div className="fixed top-0 left-56 right-0 z-10 flex justify-between items-center border-b border-gray-300 bg-white h-[70px] px-5">
      <Breadcrumb>
        <BreadcrumbList>
          {decodedSlug.length > 1
            ? decodedSlug.map((item, index) => {
                return (
                  <div key={index} className="flex gap-x-3 items-center">
                    {item !== "dashboard" && (
                      <BreadcrumbItem>
                        <BreadcrumbLink href={`/${decodedSlug.slice(0, index + 1).join("/")}`}>
                          {decodeURIComponent(capitalizeFirstLetter(item))}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    )}
                    {index !== 0 && index !== decodedSlug.length - 1 && <BreadcrumbSeparator />}
                  </div>
                );
              })
            : null}
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="edit" className="w-[300px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
