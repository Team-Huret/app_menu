import DashedButton from "@/components/global/DashedButton";
import { HiOutlineFolderPlus } from "react-icons/hi2";

export default function EmptyEvents() {
  return (
    <div>
      <p>Nothing here yet, you can start by creating your first event here.</p>
      <DashedButton icon={<HiOutlineFolderPlus className="size-4 mr-1" />}>Add new Event</DashedButton>
    </div>
  );
}
