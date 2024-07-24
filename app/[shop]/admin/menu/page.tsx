import TopBar from "@/components/admin/TopBar";
import SubcategoryBlock from "@/components/admin/SubcategoryBlock";
import { MdAdd } from "react-icons/md";
import CategoryPreview from "@/components/admin/CategoryPreview";
import Entry from "@/components/admin/Entry";

export default function menu() {
  return (
    <div className="px-10 py-14 w-full">
      <TopBar />
      <div className="flex gap-x-5 mt-5 ">
        <div className="space-y-5 grow">
          <Entry entry={{ name: "Toast tomatoes, mozzarella, and basil", id: 1 }} border="border" className="rounded-lg" />
          <Entry entry={{ name: "Turkey burger with lettuce, tomato, and onion", id: 1 }} border="border" className="rounded-lg" />
          <Entry entry={{ name: "Bacon sandwich on crusty bread", id: 1 }} border="border" className="rounded-lg" />
          <SubcategoryBlock />
          <SubcategoryBlock />
          <div className="flex justify-center items-center w-full p-4 hover:bg-gray-50 cursor-pointer gap-x-2 rounded-lg border border-dashed border-gray-400">
            <MdAdd className="size-5" />
            <p className="text-base font-medium">Add global entry</p>
          </div>
          <div className="flex justify-center items-center w-full p-4 hover:bg-gray-50 cursor-pointer gap-x-2 rounded-lg border border-dashed border-gray-400">
            <MdAdd className="size-5" />
            <p className="text-base font-medium">Add subcategory</p>
          </div>
        </div>
        <CategoryPreview />
      </div>
    </div>
  );
}
