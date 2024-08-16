import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function VerifEmailPopup() {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <span className="flex items-center gap-x-2">
              <BiBadgeCheck className=" text-green-500 size-5" />
              Account successfully created !
            </span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-start">
            We just sent an you email. Click the link in the email to verify your account.
          </AlertDialogDescription>
          <p className="text-red-500 text-sm">{error}</p>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-end items-center gap-x-2">
          {user &&
            (resendingEmail ? (
              <Button disabled>
                <ImSpinner9 className="animate-spin size-4 mr-3" />
                Resend Email
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => {
                  handleResendEmail(user);
                }}
              >
                Resend Email
              </Button>
            ))}
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
