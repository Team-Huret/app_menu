"use client";
import MenuSideBar from "@/app/dashboard/menu/(edit)/_components/MenuSideBar";
import { useGetCategories } from "../(edit)/_data/getCategories";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading } = useGetCategories();

  if (isLoading) return null;

  return <div id="menu_render_div">{children}</div>;
}
