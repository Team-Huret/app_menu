"use client";
import { usePathname } from "next/navigation";
import { useGetEntry } from "./_data/getEntryToEdit";

export default function EditEntryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlugParts = slug.map((item) => decodeURIComponent(item));
  const { isLoading } = useGetEntry(decodedSlugParts[5]);
if (isLoading) return null;
  return <>{children}</>;
}
