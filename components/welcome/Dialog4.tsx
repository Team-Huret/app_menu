"use client";
import { AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";

export default function Dialog4() {
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription asChild>
          <div className="max-w-lg w-[400px] h-[200px] flex flex-col items-center justify-center gap-y-6">
            <p className="text-base">Generating your custom dashboard... </p>
            <Progress value={70} className="w-[90%]" />
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
    </>
  );
}
