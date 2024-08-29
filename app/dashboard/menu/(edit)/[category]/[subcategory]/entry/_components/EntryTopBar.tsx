import React from "react";
import { Button } from "@/components/ui/button";
import { IoLanguage } from "react-icons/io5";
import SelectInput from "@/components/global/SelectInput";
import { useState } from "react";
import { useEntryStore } from "../_store/useEntryStore";
import { useSubcategoryStore } from "../../_store/useSubcategoryStore";
import { useCategoryStore } from "../../../_store/useCategoryStore";
import { addEntry } from "../_data/addEntry";
import { useRouter } from "next/navigation";
import { GrFormPrevious } from "react-icons/gr";

export default function EntryTopBar() {
  const router = useRouter();
  const [language, setLanguage] = useState("");
  const { subcategoryId, subcategoryName } = useSubcategoryStore();
  const { categoryName } = useCategoryStore();
  const {
    entryName,
    entryDescription,
    entryPrice,
    entryOptions,
    entryLabels,
    entryAllergies,
    badge,
    entryImage,
    setError,
    setEntryImage,
    setEntryName,
    setEntryDescription,
    setEntryPrice,
    setEntryOptions,
    setEntryLabels,
    setEntryAllergies,
    setBadge,
  } = useEntryStore();

  const handleAddEntry = async () => {
    if (entryName === "" || entryPrice === 0 || !subcategoryId) {
      setError("Please fill in all the required fields.");
      return;
    }
    const entryData = {
      name: entryName,
      description: entryDescription,
      price: entryPrice,
      labels: entryLabels,
      allergies: entryAllergies,
      options: entryOptions,
      photo: entryImage,
      badge: badge,
      subcategory_id: subcategoryId,
    };

    const res = await addEntry(entryData);
    if (res) {
      window.location.replace(`/dashboard/menu/${categoryName}/${subcategoryName}`);
    }
  };
  const goBack = () => {
    setEntryImage(null);
    setEntryName("");
    setEntryDescription("");
    setEntryPrice(0);
    setEntryOptions([]);
    setEntryLabels([]);
    setEntryAllergies([]);
    setBadge("");
    router.push(`/dashboard/menu/${categoryName}/${subcategoryName}`);
  };
  return (
    <div className="w-full py-7 border-b border-gray-300">
      <div className="flex justify-between items-center px-7">
        <div className="flex gap-x-4 items-center">
          <GrFormPrevious className="size-7 cursor-pointer" onClick={goBack} />

          <h2 className="text-2xl font-bold">Add a new entry</h2>
        </div>
        <div className="flex gap-x-4">
          <div className="min-w-[150px]">
            <SelectInput icon={<IoLanguage className="size-4" />} value={language} setValue={setLanguage} data={["English", "Thai"]} />
          </div>
          <Button onClick={handleAddEntry}>Save</Button>
        </div>
      </div>
    </div>
  );
}
