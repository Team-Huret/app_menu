import React from "react";
import { AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { setupStore } from "@/data/global_state/setupStore";

export default function Dialog1() {
  const { increaseDialogCounter } = setupStore();
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>👋 Welcome to App Menu!</AlertDialogTitle>
        <AlertDialogDescription asChild>
          <div className="max-w-lg">
            <p className="mb-1.5">
              Welcome to your business dashboard! Starting today, you have a <b>30-day free trial</b> to explore <b>all the features</b> and determine
              what you need to grow your business.
            </p>

            <p className="mb-1.5">
              After the trial period, you will be redirected to the subscription page to choose the plan that best fits your needs. You can check the
              pricing at any time in the subscription tab.
            </p>

            <p className="mb-1.5">We hope you enjoy using our app!</p>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Button onClick={() => increaseDialogCounter()}>Continue</Button>
      </AlertDialogFooter>
    </>
  );
}
