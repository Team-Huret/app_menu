"use client";
import TopBar from "@/components/layout/TopBar";
import SideBar from "@/components/layout/SideBar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import { globalStore } from "@/data/global_state/globalStore";
import { useRouter } from "next/navigation";
import Loader from "@/components/layout/Loader";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { BusinessDoc } from "@/firebase/types/business";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { setUserDoc, setBusinessDoc } = globalStore();

  useEffect(() => {
    const getUser = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setIsLoading(false);
          setUserDoc(user);
          const businessRef = collection(db, "business");
          const req = query(businessRef, where("ownerId", "==", user.uid));
          const querySnapshot = await getDocs(req);
          if (!querySnapshot.empty) {
            const businessDoc = querySnapshot.docs[0].data();
            setBusinessDoc(businessDoc as BusinessDoc);
            console.log(businessDoc);
          } else {
            console.log("No business found for this user.");
          }
        } else {
          router.push("/login");
        }
      });
    };
    getUser();
  }, []);

  if (isLoading) return <Loader />;
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
