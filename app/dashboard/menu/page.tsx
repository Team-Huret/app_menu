import EmptyTab from "@/components/layout/EmptyTab";
import MenuSideBar from "@/components/tabs/menu/MenuSideBar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { IoIosAdd } from "react-icons/io";

export default function Menu() {
  return (
    <div className="flex">
      <MenuSideBar />
      <EmptyTab text="Nothing here yet, you can start by creating your first category here." buttonText="Add new category" />
    </div>
  );
}
