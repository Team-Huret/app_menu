import Image from "next/image";
import prev from "@/assets/images/prev.png";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Button } from "@/components/ui/button";
import grid1 from "@/assets/images/grid-1.jpg";
import grid2 from "@/assets/images/grid-2.jpeg";
import grid3 from "@/assets/images/grid-3.jpeg";
import { LuTrash2 } from "react-icons/lu";

export default function CategoryPreview() {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-[400px] space-y-5 self-start">
      <div className="relative">
        <Image src={prev} alt="breakfast" width={500} height={300} className="rounded-lg object-cover w-full h-full" />
        <Button variant="outline" className="absolute bottom-2 right-2">
          <MdOutlineAddPhotoAlternate className="size-4 mr-1" /> Edit
        </Button>
      </div>
      <div>
        <h4 className="mb-2">Breakfast</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <Image src={grid1} alt="breakfast" width={200} height={100} className="rounded-lg object-cover w-full h-full max-h-24" />
          <p className="truncate mt-1">Signature Sandwich consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet</p>
        </div>
        <div>
          <Image src={grid2} alt="breakfast" width={200} height={100} className="rounded-lg object-cover w-full h-full max-h-24" />
          <p className="truncate mt-1">Burger</p>
        </div>
        <div>
          <Image src={grid3} alt="breakfast" width={200} height={100} className="rounded-lg object-cover w-full h-full max-h-24" />
          <p className="truncate mt-1">Burritos</p>
        </div>
        <div>
          <Image src={grid1} alt="breakfast" width={200} height={100} className="rounded-lg object-cover w-full h-full max-h-24" />
          <p className="truncate mt-1">Tacos</p>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 py-2 hover:bg-gray-50 cursor-pointer gap-x-2 rounded-lg border border-gray-300 w-[80%] mx-auto">
        <LuTrash2 className="size-5" />
        <p className=" font-medium">Delete category</p>
      </div>
    </div>
  );
}
