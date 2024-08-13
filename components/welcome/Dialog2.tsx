"use client";
import { AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { businessTypes } from "@/data/static/settings";
import SelectInput from "@/components/input/SelectInput";
import { welcomeStore } from "@/data/global_state/welcomeStore";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Dialog2() {
  const [error, setError] = useState("");
  const {
    countryValue,
    languageValue,
    businessTypeValue,
    setBusinessTypeValue,
    businessName,
    setBusinessName,
    currencyValue,
    ownership,
    toggleOwnership,
    increaseDialogCounter,
  } = welcomeStore();

  const checkInputs = () => {
    if (!businessTypeValue || !businessName) {
      setError("Please fill in all the required fields.");
    } else {
      setError("");
      increaseDialogCounter();
    }
  };
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>Business informations</AlertDialogTitle>
        <AlertDialogDescription asChild>
          <div className="max-w-lg">
            <p className="mb-5">Before you get started, we need a few information about your business. Click continue when you are done.</p>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="grid gap-2">
                  <p className="text-black font-medium">Business name</p>
                  <Input placeholder="My business" required onChange={(e) => setBusinessName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <p className="text-black font-medium">Business type</p>
                  <SelectInput value={businessTypeValue} setValue={setBusinessTypeValue} data={businessTypes} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-x-2">
                  <Checkbox defaultChecked onCheckedChange={() => toggleOwnership()} />
                  <p className="text-black font-medium text-sm">I am the owner of this business</p>
                </div>
                {!ownership && (
                  <p className="text-sm mt-1 p-2 border border-red-500 rounded-lg bg-red-100/30 text-red-800">
                    If you are not the owner of this business, you cannot register it. Please contact your manager to get an team member access.
                  </p>
                )}
              </div>
              <div>
                <p className="text-red-500 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        </AlertDialogDescription>
        {ownership && (
          <AlertDialogFooter>
            <Button onClick={() => checkInputs()}>Continue</Button>
          </AlertDialogFooter>
        )}
      </AlertDialogHeader>
    </>
  );
}
