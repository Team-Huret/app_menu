"use client";
import React from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";

import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { BiParty } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

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
  const [openDrawer, setOpenDrawer] = useState("");
  const openDrawerHandler = (name: string) => {
    if (openDrawer === name) {
      setOpenDrawer("");
    } else {
      setOpenDrawer(name);
    }
  };
  return (
    <div className="sticky top-0 z-10 h-screen bottom-0 left-0 flex">
      <div className="w-56 border-r border-gray-300 bg-white h-full flex flex-col justify-between">
        <div className="">
          <div className="p-7 border-b border-gray-300 flex justify-center">
            <h2 className="font-bold text-3xl/3">Me&You</h2>
          </div>
          <div className="p-4 py-7 space-y-1 border-b border-gray-300">
            {navLinks.map((navLink, index) => (
              <div
                key={index}
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                onClick={() => openDrawerHandler(navLink.name)}
              >
                <span className="flex items-center gap-x-2 font-medium">
                  {navLink.icon} {navLink.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 py-7 space-y-1 border-t border-gray-300">
          <div className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span className="flex items-center gap-x-2 font-medium">
              <IoSettingsOutline className="size-5" /> Settings
            </span>
          </div>
          <div className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span className="flex items-center gap-x-2 font-medium">
              <TbLogout className="size-5" /> Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
