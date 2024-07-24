"use client";
import React from "react";
import CategoryTab from "./CategoryTab";
import { HiOutlineFolderPlus } from "react-icons/hi2";

export default function AdminMenuSideBar() {
  const categories = ["Food", "Drinks", "dinner", "dessert"];

  return (
    <div className="w-56 h-screen border-r border-gray-300 bg-white py-10 px-5">
      <h3 className="mb-3 ml-2">Categories</h3>
      <div>
        {categories.map((category, index) => (
          <CategoryTab key={index} name={category} />
        ))}
      </div>
      <div className="w-[88%] h-[1px] bg-gray-300 rounded-full mx-auto my-5"></div>
      <div className="flex justify-center items-center w-full border border-dashed border-gray-800 rounded-lg p-2 hover:bg-gray-50 cursor-pointer gap-x-2">
        <HiOutlineFolderPlus />
        <p className="text-sm">Add new category</p>
      </div>
    </div>
  );
}
