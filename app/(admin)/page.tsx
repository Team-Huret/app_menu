"use client";
import SideBar from "@/components/layout/SideBar";

import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import Dialog1 from "@/components/welcome/Dialog1";
import Dialog2 from "@/components/welcome/Dialog2";
import Dialog3 from "@/components/welcome/Dialog3";
import Dialog4 from "@/components/welcome/Dialog4";
import { setupStore } from "@/data/global_state/setupStore";

export default function Welcome() {
  const dialogCounter = setupStore((state) => state.dialogCounter);
  const dialogList = {
    0: <Dialog1 />,
    1: <Dialog2 />,
    2: <Dialog3 />,
    3: <Dialog4 />,
  };
  return (
    <div>
      <SideBar />
      <AlertDialog open={true}>
        <AlertDialogContent className="max-w-fit">{dialogList[dialogCounter as keyof typeof dialogList]}</AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
