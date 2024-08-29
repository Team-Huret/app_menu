"use client";
import { useGetEntries } from "./_data/getEntries";
import { usePathname } from "next/navigation";

export default function SubCategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlugParts = slug.map((item) => decodeURIComponent(item));
  const { isLoading } = useGetEntries(decodedSlugParts[3]);

  if (isLoading) return null;

  return <>{children}</>;
}
