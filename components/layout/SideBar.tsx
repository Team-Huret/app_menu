import { MdRestaurantMenu } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { BiParty } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

import { logout } from "@/server/actions/auth";

export default function SideBar() {
  const navLinks = [
    { name: "Dashboard", icon: <RxDashboard className="size-5" /> },
    { name: "My Business", icon: <GoHome className="size-5" /> },
    { name: "Menu", icon: <MdRestaurantMenu className="size-5" /> },
    { name: "Events", icon: <BiParty className="size-5" /> },
    { name: "Booking", icon: <IoIosCalendar className="size-5" /> },
    { name: "Discounts", icon: <MdOutlineDiscount className="size-5" /> },
    { name: "Analytics", icon: <IoAnalytics className="size-5" /> },
  ];
  return (
    <div className="sticky top-0 z-10 h-screen bottom-0 left-0 flex">
      <div className="w-56 border-r border-gray-300 bg-white h-full flex flex-col justify-between">
        <div className="">
          <div className="h-[70px] border-b border-gray-300 flex justify-center items-center">
            <h2 className="font-bold text-3xl/3">Me&You</h2>
          </div>
          <div className="p-2 py-5 space-y-1 border-b border-gray-300">
            {navLinks.map((navLink, index) => (
              <div key={index} className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span className="flex items-center gap-x-2 font-medium">
                  {navLink.icon} {navLink.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-2 py-3 space-y-1 border-t border-gray-300">
          <div className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span className="flex items-center gap-x-2 font-medium">
              <IoSettingsOutline className="size-5" /> Settings
            </span>
          </div>

          <div className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={() => logout()}>
            <span className="flex items-center gap-x-2 font-medium">
              <TbLogout className="size-5" /> Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
