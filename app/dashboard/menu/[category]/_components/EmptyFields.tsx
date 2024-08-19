import DashedButton from "@/components/global/DashedButton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { addSubcategory } from "../_data/addSubcategory";

export default function EmptyFields() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-base mb-3">Nothing here yet, you can start by creating your first subcategory.</p>
      <div className="w-full flex justify-center items-center max-w-[60%] gap-3">
        <Popover>
          <PopoverTrigger>
            <Button variant="dashed" className="w-full">
              <HiOutlineFolderPlus className="size-5 mr-2" />
              Add a subcategory
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <form className="flex items-center gap-x-2">
              <Input placeholder="Enter subcategory name" className="w-full" />
              <button type="submit">
                <MdAdd className="size-6 cursor-pointer" />
              </button>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
