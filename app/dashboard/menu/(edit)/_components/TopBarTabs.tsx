"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMenuStore } from "../_store/useMenuStore";

export default function TopBarTabs() {
  const { view, setView } = useMenuStore();
  return (
    <Tabs value={view} onValueChange={(value) => setView(value)} className="w-[300px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="edit">Edit</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
