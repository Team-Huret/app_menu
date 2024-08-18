"use client";
import { AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { globalStore } from "@/data/global_state/globalStore";
import FeatureCard from "@/components/tabs/welcome/FeatureCard";
import { features } from "@/data/static/Features";
import { useState } from "react";

export default function Dialog3() {
  const { increaseDialogCounter, featureList, pushFeature, removeFeature } = globalStore();
  const [error, setError] = useState("");

  const handleFeatureClick = (featureName: string) => {
    if (featureList.includes(featureName)) {
      removeFeature(featureName);
    } else {
      pushFeature(featureName);
    }
  };
  const handleContinue = () => {
    if (featureList.length === 0) {
      setError("Please select at least one feature.");
    } else {
      increaseDialogCounter();
    }
  };
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>What are your interested in?</AlertDialogTitle>
        <AlertDialogDescription>Here an overview of all the features available, choose the ones you are interested in!</AlertDialogDescription>
        <div className="flex flex-wrap justify-center gap-5 max-w-[760px] pt-5 items-stretch">
          {features.map((feature) => (
            <div key={feature.feature_name} onClick={() => handleFeatureClick(feature.feature_name)} className="">
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </div>
          ))}
        </div>
        <div className="pt-5">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Button onClick={() => handleContinue()}>Continue</Button>
      </AlertDialogFooter>
    </>
  );
}
