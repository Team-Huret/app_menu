import DashedButton from "@/components/global/DashedButton";
import { HiOutlineFolderPlus } from "react-icons/hi2";

export default function EmptyEvents() {
  return (
    <div className="w-full h-[60vh] flex justify-center items-center">
      <div className=" flex flex-col gap-2 justify-center items-center">
        <p>Nothing here yet, you can start by creating your first event here.</p>
        <DashedButton icon={<HiOutlineFolderPlus className="size-4 mr-1" />}>Add new Event</DashedButton>
      </div>
    </div>
  );
}
