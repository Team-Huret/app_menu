"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import EntryTopBar from "./_components/EntryTopBar";
import { labels, allergies } from "@/data/menu";
import { useEntryStore } from "./_store/useEntryStore";
import AddOptionButton from "./_components/AddOptionButton";
import CheckboxList from "./_components/CheckboxList";
import OptionBlock from "./_components/OptionBlock";
import InputFile from "./_components/InputFile";
import SelectInput from "@/components/global/SelectInput";
import { MdLabelImportantOutline } from "react-icons/md";
import { badgeList } from "@/data/menu";

export default function Add() {
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
    badge,
    setBadge,
    error,
  } = useEntryStore();

  return (
    <div className="w-full">
      <EntryTopBar />
      <div className="w-full p-5 space-y-5">
        <p className="text-red-500 text-sm">{error}</p>
        <div className="flex gap-5">
          <div className="grow space-y-5">
            <div className="w-full space-y-1">
              <Label>Name</Label>
              <Input placeholder="Chicken curry rice" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
            </div>
            <div className="space-y-1">
              <Label>Introduction</Label>
              <Textarea
                placeholder="
                  Rice dish cooked with chicken, vegetables, and a curry sauce...
                "
                onChange={(e) => setEntryDescription(e.target.value)}
                value={entryDescription}
              />
            </div>
          </div>
          <InputFile />
        </div>
        <div className="flex gap-8 ">
          <div className="basis-1/2 space-y-5">
            <OptionBlock role="base" state={entryPrice} setState={setEntryPrice} name="Regular price" />
            {entryOptions.map((option, index) => (
              <OptionBlock key={index} role="option" state={option.Price} name={option.Name} />
            ))}
            <AddOptionButton />
          </div>
          <div className="grow basis-1/2 space-y-5">
            <CheckboxList
              listName="Badge"
              message="Only one badge can be selected, it will stand out on the menu."
              listData={badgeList}
              state={badge}
              setState={setBadge}
              selectionType="single"
            />
            <CheckboxList listName="Labels" listData={labels} state={entryLabels} setState={setEntryLabels} selectionType="multiple" />
            <CheckboxList
              listName="Allergies"
              message="Check if the entry contains any of the following allergies"
              listData={allergies}
              state={entryAllergies}
              setState={setEntryAllergies}
              selectionType="multiple"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
