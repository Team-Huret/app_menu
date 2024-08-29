import { HiOutlineFolderPlus } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import SubcategoryTopBar from "./SubcategoryTopBar";
import Link from "next/link";
import { useSubcategoryStore } from "../_store/useSubcategoryStore";
import { useCategoryStore } from "../../_store/useCategoryStore";

export default function EmptyEntries() {
  const { categoryName } = useCategoryStore();
  const { subcategoryName } = useSubcategoryStore();
  return (
    <div className="w-full">
      <SubcategoryTopBar />

      <div className="w-full flex flex-col justify-center items-center mt-20">
        <p className="text-base mb-3">Nothing here yet, you can start by creating your first Entry.</p>
        <Link href={`/dashboard/menu/${categoryName}/${subcategoryName}/entry`}>
          <Button variant="dashed">
            <HiOutlineFolderPlus className="size-5 mr-2" />
            Add an entry
          </Button>
        </Link>
      </div>
    </div>
  );
}
