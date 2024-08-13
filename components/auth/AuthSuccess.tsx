import React from "react";
import { RxCheckCircled } from "react-icons/rx";

interface AuthSuccess {
  message?: string;
}

export default function AuthSuccess({ message }: AuthSuccess) {
  if (!message) return null;
  return (
    <div className="flex items-center bg-emerald-500/15 text-emerald-500 p-3 rounded-lg gap-x-2 text-sm">
      <RxCheckCircled className="size-4" />
      <span>{message}</span>
    </div>
  );
}
