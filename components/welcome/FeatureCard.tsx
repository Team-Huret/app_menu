"use client";
import { useState } from "react";

export default function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={`flex flex-col h-full justify-center items-center text-center gap-y-2 p-5 border border-gray-300 rounded-lg max-w-[240px] hover:ring-2 hover:ring-ring hover:ring-offset-2 cursor-pointer ${
        clicked && "ring-2 ring-ring ring-offset-2"
      }`}
      onClick={() => setClicked(!clicked)}
    >
      {icon}
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
