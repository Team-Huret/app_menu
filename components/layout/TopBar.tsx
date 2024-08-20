"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/lib/functions/string";

export default function TopBar() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlug = slug.map((item) => decodeURIComponent(item));
  console.log(slug);

  return (
    <div className="fixed top-0 z-10 w-full flex justify-between items-center border-b border-gray-300 bg-white h-[70px] px-5">
      <Breadcrumb>
        <BreadcrumbList>
          {decodedSlug.length > 1
            ? decodedSlug.map((item, index) => {
                return (
                  <>
                    {item !== "dashboard" && (
                      <BreadcrumbItem key={index}>
                        <BreadcrumbLink href={`/${decodedSlug.slice(0, index + 1).join("/")}`}>
                          {decodeURIComponent(capitalizeFirstLetter(item))}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    )}
                    {index !== 0 && index !== decodedSlug.length - 1 && <BreadcrumbSeparator />}
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
