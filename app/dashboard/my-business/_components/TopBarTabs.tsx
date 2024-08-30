"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TopBarTabs() {
  return (
    <Tabs defaultValue="edit" className="w-[300px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="edit">Edit</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
