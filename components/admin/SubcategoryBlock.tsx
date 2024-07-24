import { LuTrash2 } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import Entry from "./Entry";

export default function SubcategoryBlock() {
  const name = "Burger";
  const entries = [
    {
      name: "Bacon sandwich on crusty bread",
      id: 1,
    },
    {
      name: "Toast tomatoes, mozzarella, and basil",
      id: 2,
    },
    {
      name: "Hamburger with cheddar cheese, lettuce, tomato, and onion",
      id: 3,
    },
    {
      name: "Turkey burger with lettuce, tomato, and onion",
      id: 4,
    },
  ];

  return (
    <div className="border border-gray-300 rounded-lg ">
      <div className="flex items-center justify-between gap-x-5 p-4 border-b border-gray-300">
        <h3>{name}</h3>
        <div className="flex gap-x-4 items-center">
          <FiEdit className="size-5 cursor-pointer" />
          <LuTrash2 className="size-5 cursor-pointer" />
          <MdDragIndicator className=" size-5 cursor-pointer" />
        </div>
      </div>
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} border="border-b" />
      ))}
      <div className="flex justify-center items-center w-full p-4 hover:bg-gray-50 cursor-pointer gap-x-2 rounded-br-lg rounded-bl-lg">
        <MdAdd className="size-5" />
        <p className=" font-medium">Add new entry</p>
      </div>
    </div>
  );
}
