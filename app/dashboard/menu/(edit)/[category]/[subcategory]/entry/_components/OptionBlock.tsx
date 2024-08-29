import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PriceOptionProps {
  state: number;
  setState?: (value: number) => void;
  role: "base" | "option";
  name: string;
}

export default function OptionBlock({ state, setState, role, name }: PriceOptionProps) {
  return (
    <div className="w-full space-y-1">
      <Label>{name}</Label>
      <div className="relative">
        {role === "base" ? (
          <Input placeholder="550" type="number" onChange={(e) => (setState ? setState(Number(e.target.value)) : null)} value={state} required />
        ) : (
          <Input value={state} />
        )}
        <span className="absolute top-1/2 -translate-y-1/2 right-4">฿</span>
      </div>
    </div>
  );
}
