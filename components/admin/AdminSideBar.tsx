"use client";
import React from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import { MdOutlineEmojiEvents } from "react-icons/md";
import AdminMenuSideBar from "./AdminMenuSideBar";
import { useState } from "react";

export default function AdminSideBar() {
  const navLinks = [
    { name: "Menu", icon: <MdRestaurantMenu className="size-5" /> },
    { name: "Event", icon: <MdOutlineEmojiEvents className="size-5" /> },
    { name: "Booking", icon: <IoIosCalendar className="size-5" /> },
    { name: "Discount", icon: <MdDiscount className="size-5" /> },
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
      <div className="w-56 border-r border-gray-300 bg-white">
        <div className="p-5 border-b border-gray-300">
          <h2>Me&You</h2>
        </div>
        <div className="p-4 mt-3 space-y-5">
          <div className="space-y-1">
            <h3 className="ml-2">Customize</h3>
            <div>
              {navLinks.map((navLink, index) => (
                <div
                  key={index}
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                  onClick={() => openDrawerHandler(navLink.name)}
                >
                  <span className="flex items-center gap-x-2">
                    {navLink.icon} {navLink.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {openDrawer === "Menu" && <AdminMenuSideBar />}
    </div>
  );
}
