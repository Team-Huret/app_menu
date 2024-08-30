"use client";
import MenuSideBar from "@/app/dashboard/menu/(edit)/_components/MenuSideBar";
import { useGetCategories } from "./_data/getCategories";
import MenuSkeleton from "./_components/MenuSkeleton";
import TopBar from "./_components/TopBar";
import { useMenuStore } from "./_store/useMenuStore";
import Preview from "./_components/_preview/preview";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading } = useGetCategories();
  const { view } = useMenuStore();

  if (isLoading) return <MenuSkeleton />;

  return (
    <div className="w-full mt-[70px]">
      <TopBar />
      <div className="flex w-full h-full">
        {view === "preview" ? (
          <Preview />
        ) : (
          <>
            <MenuSideBar />
            {children}
          </>
        )}
      </div>
    </div>
  );
}
