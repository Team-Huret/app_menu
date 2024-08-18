"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import DashedButton from "@/components/global/DashedButton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";

export default function AddOptionButton() {
  const [optionName, setOptionName] = useState("");
  const [optionPrice, setOptionPrice] = useState(0);
  const { entryOptions, setEntryOptions } = useMenuStore();

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (optionName === "" || optionPrice === 0) return setError("Please fill in all the fields.");
    if (isNaN(optionPrice)) return setError("Please enter a valid number.");
    setEntryOptions([...entryOptions, { name: optionName, price: optionPrice }]);
    setOptionName("");
    setOptionPrice(0);
    setError("");
  };
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <DashedButton className="w-full" icon={<HiOutlineFolderPlus />}>
          Add an option
        </DashedButton>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <Label>Name</Label>
            <Input
              placeholder="Ex. big size, Double steak, etc.. "
              className="w-full"
              onChange={(e) => setOptionName(e.target.value)}
              value={optionName}
            />
          </div>
          <div className="space-y-1">
            <Label>Price</Label>
            <div className="relative">
              <Input placeholder="550" type="number" onChange={(e) => setOptionPrice(Number(e.target.value))} value={optionPrice} required />
              <span className="absolute top-1/2 -translate-y-1/2 right-4">฿</span>
            </div>
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <Button type="submit" className="flex justify-center items-center gap-x-2" variant="outline" onClick={handleSubmit}>
            <HiOutlineFolderPlus className="size-5 cursor-pointer" />
            Add
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
