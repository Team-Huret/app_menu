"use client";
import { AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";
import { globalStore } from "@/data/global_state/globalStore";
import { addCollectionDoc } from "@/firebase/database/addCollectionDocs";
import { useState } from "react";

export default function Dialog4() {
  const { businessName, businessTypeValue, featureList, userId } = globalStore();
  const [created, setCreated] = useState(false);
  useEffect(() => {
    const createBusiness = async () => {
      const data = {
        name: businessName,
        type: businessTypeValue,
        features: featureList,
        ownerId: userId,
      };
      const res = await addCollectionDoc("business", data);
      if (res) setCreated(true);
    };
    createBusiness();
  }, []);

  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription asChild>
          <div className="max-w-lg w-[400px] h-[200px] flex flex-col items-center justify-center gap-y-6">
            <p className="text-base">Generating your custom dashboard... </p>
            <Progress value={created ? 100 : 0} className="w-[90%] transition duration-1000" />
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
    </>
  );
}
