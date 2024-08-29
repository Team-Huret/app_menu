"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MenuTopBar from "../_components/EntryTopBar";
import { labels, allergies } from "@/data/menu";
import { useEntryStore } from "../_store/useEntryStore";
import AddOptionButton from "../_components/AddOptionButton";
import CheckboxList from "../_components/CheckboxList";
import PriceOption from "../_components/OptionBlock";
import InputFile from "../_components/InputFile";
import { useEffect } from "react";
import EntryToEditTopBar from "./_components/EntryToEditTopBar";

export default function Edit() {
  const {
    entryName,
    setEntryName,
    entryDescription,
    setEntryDescription,
    entryPrice,
    setEntryPrice,
    entryOptions,
    entryLabels,
    setEntryLabels,
    entryAllergies,
    setEntryAllergies,
    entryToEdit,
    setEntryOptions,
    setEntryImage,
    entryToEditName,
  } = useEntryStore();

  useEffect(() => {
    if (entryToEdit) {
      setEntryName(entryToEdit.Name);
      setEntryDescription(entryToEdit.Description);
      setEntryImage(entryToEdit.Photo);
      setEntryPrice(entryToEdit.BasePrice);
      setEntryOptions(entryToEdit.Options);
      setEntryLabels(entryToEdit.Labels);
      setEntryAllergies(entryToEdit.Allergies);
    }
  }, [entryToEdit]);

  return (
    <div className="w-full">
      <EntryToEditTopBar name={entryToEditName} />
      <div className="w-full p-5 space-y-5">
        <div className="flex gap-5">
          <div className="grow space-y-5">
            <div className="w-full space-y-1">
              <Label>Name</Label>
              <Input placeholder="My business" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
            </div>
            <div className="space-y-1">
              <Label>Introduction</Label>
              <Textarea placeholder="My business" onChange={(e) => setEntryDescription(e.target.value)} value={entryDescription} />
            </div>
          </div>
          <InputFile />
        </div>
        <div className="flex gap-8 ">
          <div className="basis-1/2 space-y-5">
            <PriceOption role="base" state={entryPrice} setState={setEntryPrice} name="Regular price" />
            {entryOptions.map((option, index) => (
              <PriceOption key={index} role="option" state={option.Price} name={option.Name} />
            ))}
            <AddOptionButton />
          </div>
          <div className="grow basis-1/2 space-y-5">
            <CheckboxList listName="Labels" listData={labels} state={entryLabels} setState={setEntryLabels} />
            <CheckboxList listName="Allergies" listData={allergies} state={entryAllergies} setState={setEntryAllergies} />
          </div>
        </div>
      </div>
    </div>
  );
}
