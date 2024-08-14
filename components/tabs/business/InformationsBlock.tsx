"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SelectInput from "@/components/input/SelectInput";
import { businessTypes } from "@/data/static/settings";
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "../../ui/button";

export default function InformationsBlock() {
  const [businessTypeValue, setBusinessTypeValue] = useState("");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2">
          <div>
            <CardTitle className="mb-2">Information</CardTitle>
            <CardDescription>Add informations of your business here</CardDescription>
          </div>
          <button className="border border-border px-7 py-5 rounded-lg flex items-center gap-x-2 hover:bg-gray-50 cursor-pointer transition">
            <BiImageAdd className="size-5 cursor-pointer" />
            <p className="text-sm font-medium">Upload your logo</p>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-7">
          <div className="w-full space-y-5">
            <div className="flex gap-5 w-full">
              <div className="w-full space-y-1">
                <Label>Name</Label>
                <Input placeholder="My business" required />
              </div>
              <div className="w-full space-y-1">
                <Label>Business Type</Label>
                <SelectInput value={businessTypeValue} setValue={setBusinessTypeValue} data={businessTypes} />
              </div>
            </div>
            <div className="space-y-1">
              <Label>Introduction</Label>
              <Textarea placeholder="My business" required />
            </div>
          </div>
          <div className="w-full space-y-5">
            <div className="flex gap-5 w-full">
              <div className="w-full space-y-1">
                <p className="text-black font-medium">City</p>
                <Input placeholder="Phuket" required />
              </div>
              <div className="w-full space-y-1">
                <p className="text-black font-medium">Post Code</p>
                <Input placeholder="83000" required />
              </div>
            </div>
            <div className="flex gap-5 w-full">
              <div className="w-full space-y-1">
                <p className="text-black font-medium">Street & Number</p>
                <Input placeholder="14/2 Patak Rd, Karon" required />
              </div>
              <div className="w-full space-y-1">
                <p className="text-black font-medium">District</p>
                <Input placeholder="Karon" required />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
