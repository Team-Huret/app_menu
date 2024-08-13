"use client";
import { AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currencies, languages, businessTypes, countries } from "@/data/static/settings";
import SelectInput from "@/components/input/SelectInput";
import SelectInputWithSearchBar from "@/components/input/SelectInputWithSearchBar";
import { setupStore } from "@/data/global_state/setupStore";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Dialog2() {
  const [error, setError] = useState("");
  const {
    countryValue,
    setCountryValue,
    languageValue,
    setLanguageValue,
    businessTypeValue,
    setBusinessTypeValue,
    businessName,
    setBusinessName,
    currencyValue,
    setCurrencyValue,
    ownership,
    toggleOwnership,
    increaseDialogCounter,
  } = setupStore();

  const checkInputs = () => {
    if (!countryValue || !languageValue || !businessTypeValue || !businessName || !currencyValue) {
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
          <div className="maw-w-lg">
            <p className="mb-5">Before you get started, we need a few information about your business. Click continue when you are done.</p>
            <div>
              <div className="grid gap-2 mb-3">
                <p className="text-black font-medium">Business name</p>
                <Input placeholder="My business" required onChange={(e) => setBusinessName(e.target.value)} />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="grid gap-2">
                  <p className="text-black font-medium">Country</p>
                  <SelectInputWithSearchBar value={countryValue} setValue={setCountryValue} data={countries} />
                </div>
                <div className="grid gap-2">
                  <p className="text-black font-medium">Language</p>
                  <SelectInput value={languageValue} setValue={setLanguageValue} data={languages} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="grid gap-2">
                  <p className="text-black font-medium">Currency</p>
                  <SelectInput value={currencyValue} setValue={setCurrencyValue} data={currencies} />
                </div>
                <div className="grid gap-2">
                  <p className="text-black font-medium">Business type</p>
                  <SelectInput value={businessTypeValue} setValue={setBusinessTypeValue} data={businessTypes} />
                </div>
              </div>
              <div className="mt-5">
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
              <div className="mt-5">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            </div>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      {ownership && (
        <AlertDialogFooter>
          <Button onClick={() => checkInputs()}>Continue</Button>
        </AlertDialogFooter>
      )}
    </>
  );
}
