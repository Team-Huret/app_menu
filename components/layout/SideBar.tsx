"use client";
import { MdRestaurantMenu } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { BiParty } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { logOut } from "@/firebase/auth/logOut";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function SideBar() {
  const router = useRouter();
  const navLinks = [
    //{ name: "Dashboard", icon: <RxDashboard className="size-5" />, href: "/dashboard" },
    { name: "My Business", icon: <GoHome className="size-5" />, href: "/dashboard/my-business" },
    { name: "Menu", icon: <MdRestaurantMenu className="size-5" />, href: "/dashboard/menu" },
    { name: "Events", icon: <BiParty className="size-5" />, href: "/dashboard/events" },
    //{ name: "Booking", icon: <IoIosCalendar className="size-5" />, href: "/dashboard/booking" },
    //{ name: "Discounts", icon: <MdOutlineDiscount className="size-5" />, href: "/dashboard/discounts" },
    //{ name: "Analytics", icon: <IoAnalytics className="size-5" />, href: "/dashboard/analytics" },
  ];
  const handleLogOut = () => {
    logOut().then(() => router.push("/login"));
  };
  return (
    <div className="fixed top-0 z-10 h-screen bottom-0 left-0 flex">
      <div className="w-56 border-r border-gray-300 bg-white h-full flex flex-col justify-between">
        <div className="">
          <div className="h-[70px] border-b border-gray-300 flex justify-center items-center">
            <h2 className="font-bold text-3xl/3">Me&You</h2>
          </div>
          <div className="p-2 py-5 space-y-1 border-b border-gray-300">
            {navLinks.map((navLink, index) => (
              <Link key={index} href={navLink.href} className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span className="flex items-center gap-x-2 font-medium">
                  {navLink.icon} {navLink.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-2 py-3 space-y-1 border-t border-gray-300">
          <div className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span className="flex items-center gap-x-2 font-medium">
              <IoSettingsOutline className="size-5" /> Settings
            </span>
          </div>

          <div className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={handleLogOut}>
            <span className="flex items-center gap-x-2 font-medium">
              <TbLogout className="size-5" /> Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
