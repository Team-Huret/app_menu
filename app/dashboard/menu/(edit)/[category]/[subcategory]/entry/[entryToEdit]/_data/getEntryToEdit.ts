import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSubcategoryStore } from "../../../_store/useSubcategoryStore";
import { useEntryStore } from "../../_store/useEntryStore";
import { useCategoryStore } from "../../../../_store/useCategoryStore";

export const useGetEntry = (entryName: string) => {
  const router = useRouter();
  const { categoryName } = useCategoryStore();
  const { entries, subcategoryName } = useSubcategoryStore();
  const { setEntryToEdit, setEntryToEditName, setEntryToEditId } = useEntryStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const entry = entries.find((entry) => entry.Name === entryName);
    if (!entry) {
      router.push(`/dashboard/menu/${categoryName}/${subcategoryName}`);
      return;
    }
    setEntryToEdit(entry);
    setEntryToEditName(entry.Name);
    setEntryToEditId(entry.ID);
    setIsLoading(false);
  }, []);

  return { isLoading };
};
