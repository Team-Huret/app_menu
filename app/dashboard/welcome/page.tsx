"use client";
import Welcome from "@/components/tabs/welcome/Welcome";
import { globalStore } from "@/data/global_state/globalStore";

export default function Page() {
  const { userId } = globalStore();
  console.log(userId);
  return (
    <div>
      <Welcome />
    </div>
  );
}
