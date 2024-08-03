"use client";
import { AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { addCollectionDocs } from "@/firebase/database/addCollectionDocs";
import { setupStore } from "@/data/global_state/setupStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Dialog4() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSending, setErrorSending] = useState(false);

  const { countryValue, languageValue, businessTypeValue, businessName, currencyValue, ownership, featureList, resetDialogCounter } = setupStore(
    (state) => state
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        setErrorSending(true);
      }
    });
    const timer = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setProgress(15);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setProgress(30);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setProgress(40);
      await new Promise((resolve) => setTimeout(resolve, 200));
      setProgress(42);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setProgress(50);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setProgress(60);
    };
    const createBusiness = async () => {
      const data = {
        users: [
          {
            uid: user?.uid,
          },
        ],
        name: businessName,
        country: countryValue,
        language: languageValue,
        type: businessTypeValue,
        currency: currencyValue,
        owner: ownership,
        features: featureList,
      };
      try {
        await addCollectionDocs("business", data);
        setProgress(100);
        router.push("/dashboard");
      } catch (error) {
        setProgress(0);
        setErrorMessage("Something went wrong. Please try again.");
        setErrorSending(true);
      }
    };
    timer();
    createBusiness();
  }, []);

  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription asChild>
          <div className="max-w-lg w-[400px] h-[200px] flex flex-col items-center justify-center gap-y-6">
            <p className="text-base">Generating your custom dashboard... </p>
            <Progress value={progress} className="w-[90%]" />
            {errorSending && (
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-red-500 my-4">{errorMessage}</p>
                <Button variant="outline" onClick={() => resetDialogCounter()}>
                  Try again
                </Button>
              </div>
            )}
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
    </>
  );
}
