"use client";
import TopBar from "@/components/layout/TopBar";
import SideBar from "@/components/layout/SideBar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import Loader from "@/components/layout/Loader";
import { useState } from "react";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading(false);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) return <Loader />;
  return (
    <div className="flex ml-56 mt-[70px]">
      <SideBar />
      <TopBar />
      {children}
    </div>
  );
}
