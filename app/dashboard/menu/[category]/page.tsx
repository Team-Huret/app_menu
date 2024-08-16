"use client";
import EmptyFields from "../_components/EmptyFields";
import { useMenuStore } from "../_data/useMenuStore";
import { usePathname } from "next/navigation";

export default function Category() {
  const { categoriesList } = useMenuStore();
  const pathname = usePathname();
  const slug = decodeURIComponent(pathname.split("/")[3]);
  const category = categoriesList.find((category) => category.id === slug);
  console.log(category);

  if (category.id) return <EmptyFields />;

  return <div>data here</div>;
}
