"use client";
import { useMenuStore } from "@/app/dashboard/menu/_data/useMenuStore";
import { useRouter } from "next/navigation";

export default function Menu() {
  const { categoriesList } = useMenuStore();
  const router = useRouter();
  if (categoriesList.length > 0) {
    router.push(`/dashboard/menu/${categoriesList[0]}`);
  } else {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-base mb-3">Nothing here yet, you can start by creating your first category in the side bar.</p>
      </div>
    );
  }
}
