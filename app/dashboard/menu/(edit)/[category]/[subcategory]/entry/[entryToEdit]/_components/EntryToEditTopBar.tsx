import { Button } from "@/components/ui/button";
import { IoLanguage } from "react-icons/io5";
import SelectInput from "@/components/global/SelectInput";
import { useState } from "react";
import { useEntryStore } from "../../_store/useEntryStore";
import { GrFormPrevious } from "react-icons/gr";
import { useUpdateEntry } from "../_data/updateEntry";

export default function EntryToEditTopBar() {
  const [language, setLanguage] = useState("");
  const { entryName } = useEntryStore();
  const { updateEntry, goBack } = useUpdateEntry();
  return (
    <div className="w-full py-7 border-b border-gray-300">
      <div className="flex justify-between items-center px-7">
        <div className="flex gap-x-4 items-center">
          <GrFormPrevious className="size-7 cursor-pointer" onClick={goBack} />
          <h2 className="text-2xl font-bold">{entryName}</h2>
        </div>
        <div className="flex gap-x-4">
          <div className="min-w-[150px]">
            <SelectInput icon={<IoLanguage className="size-4" />} value={language} setValue={setLanguage} data={["English", "Thai"]} />
          </div>
          <Button onClick={updateEntry}>Save</Button>
        </div>
      </div>
    </div>
  );
}
