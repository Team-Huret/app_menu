"use client";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import Dialog1 from "./Dialog1";
import Dialog2 from "./Dialog2";
import Dialog3 from "./Dialog3";
import Dialog4 from "./Dialog4";
import { welcomeStore } from "@/data/global_state/welcomeStore";

export default function Welcome() {
  const dialogCounter = welcomeStore((state) => state.dialogCounter);
  const dialogList = [<Dialog1 key={1} />, <Dialog2 key={2} />, <Dialog3 key={3} />, <Dialog4 key={4} />];
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="max-w-fit">{dialogList[dialogCounter]}</AlertDialogContent>
    </AlertDialog>
  );
}
