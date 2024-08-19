"use client";
import TopBar from "./_components/TopBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import InputFile from "./_components/InputFile";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function Page() {
  const [entryName, setEntryName] = useState("");
  const [entryDescription, setEntryDescription] = useState("");

  return (
    <div>
      <TopBar />
      <div className="w-full p-5 space-y-5">
        <div className="flex gap-5">
          <div className="grow space-y-5">
            <div className="w-full space-y-1">
              <Label>Name</Label>
              <Input placeholder="Event name" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
            </div>
            <div className="space-y-1">
              <Label>Description</Label>
              <Textarea placeholder="Event description" rows={7} onChange={(e) => setEntryDescription(e.target.value)} value={entryDescription} />
            </div>
          </div>
          <InputFile />
        </div>
        <div className="flex items-center gap-x-5">
          <div className="grow space-y-5">
            <div className="w-full space-y-1">
              <div className="flex justify-between items-center gap-x-2">
                <Label>Location</Label>
                <div className="flex items-center gap-x-2">
                  <span className="text-sm">Home location</span>
                  <Switch />
                </div>
              </div>
              <Input placeholder="Karon beach" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
              <p className="text-xs text-muted-foreground">Enter event location if different from business location</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center gap-x-2">
                <Label>Entry fee</Label>
                <div className="flex items-center gap-x-2">
                  <span className="text-sm">No entry fee</span>
                  <Switch />
                </div>
              </div>
              <Input placeholder="500" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
              <p className="text-xs text-muted-foreground">Enter item price in THB</p>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex gap-x-2">
              <div className="w-full space-y-1">
                <Label>Start date</Label>
                <Input placeholder="July, 08 - 2024" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
              </div>
              <div className="w-full space-y-1">
                <Label>End date</Label>
                <Input placeholder="July, 08 - 2024" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-5 mt-1 opacity-0">E</p>
            <div className="flex gap-x-2">
              <div className="w-full space-y-1">
                <Label>Start time</Label>
                <Input placeholder="8:00 AM" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
              </div>
              <div className="w-full space-y-1">
                <Label>End time</Label>
                <Input placeholder="11:00 AM" onChange={(e) => setEntryName(e.target.value)} value={entryName} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1 opacity-0">E</p>
          </div>
        </div>
      </div>
    </div>
  );
}
