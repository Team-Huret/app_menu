"use client";
import MenuSideBar from "@/app/dashboard/menu/_components/MenuSideBar";
import { useGetCategories } from "./_data/getCategories";
import MenuSkeleton from "./_components/MenuSkeleton";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading } = useGetCategories();

  if (isLoading) return <MenuSkeleton />;

  return (
    <div className="flex w-full h-full">
      <MenuSideBar />
      {children}
    </div>
  );
}
