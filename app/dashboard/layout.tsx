"use client";
import TopBar from "@/components/layout/TopBar";
import SideBar from "@/components/layout/SideBar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import { globalStore } from "@/data/global_state/globalStore";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setUserId } = globalStore();
  useEffect(() => {
    const getUser = async () => {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid);
        }
      });
    };
    getUser();
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <div className="grow h-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
}
