"use client";
import { useGetSubcategories } from "./_data/getSubcategories";
import { usePathname } from "next/navigation";

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlugParts = slug.map((item) => decodeURIComponent(item));
  const { isLoading } = useGetSubcategories(decodedSlugParts[2]);

  if (isLoading) return null;

  return <>{children}</>;
}
