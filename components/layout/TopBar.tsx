"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/lib/functions/string";

export default function TopBar() {
  const pathname = usePathname();
  const slug = pathname.split("/");
  return (
    <div className="sticky top-0 z-10 w-full flex justify-between items-center border-b border-gray-300 bg-white h-[70px] px-5">
      <Breadcrumb>
        <BreadcrumbList>
          {slug.length > 1
            ? slug.map((item, index) => {
                return (
                  <>
                    {index !== 1 && index !== 0 && (
                      <BreadcrumbItem key={index}>
                        <BreadcrumbLink href={`/${slug.slice(0, index + 1).join("/")}`}>
                          {decodeURIComponent(capitalizeFirstLetter(item))}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    )}
                    {index !== 1 && index !== 0 && index !== slug.length - 1 && <BreadcrumbSeparator />}
                  </>
                );
              })
            : null}
        </BreadcrumbList>
      </Breadcrumb>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
