"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logInWithGoogle } from "@/firebase/auth/logInWithGoogle";
import { useState } from "react";
import { signUpWithEmail } from "@/firebase/auth/signUpWithEmail";
import { ImSpinner9 } from "react-icons/im";
import { BiBadgeCheck } from "react-icons/bi";
import { User } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [resendingEmail, setRensendingEmail] = useState(false);

  const handleSubmit = () => {
    if (password === "" || firstName === "" || lastName === "" || email === "") {
      setError("Please fill in all fields");
    } else {
      setLoading(true);
      const fullName = firstName + " " + lastName;
      signUpWithEmail(fullName, email, password, setError, postactionsEmail);
    }
  };
  const postactionsEmail = (user: User) => {
    setUser(user);
    setLoading(false);
    setError("");
    setOpen(true);
  };
  const postactionsGoogle = () => {
    setLoading(false);
    setError("");
    router.push("/dashboard");
  };
  const handleResendEmail = async (user: User) => {
    setRensendingEmail(true);
    try {
      await sendEmailVerification(user);
    } catch (error) {
      setError("Error sending email verification, please try again");
      setRensendingEmail(false);
    }
    setError("");
    setRensendingEmail(false);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center p-3 sm:p-0">
      <Card className="mx-auto max-w-sm ">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="text-red-500 text-sm">{error}</p>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              {loading && <ImSpinner9 className="animate-spin size-4 mr-3" />}
              Create an account
            </Button>
            <Button variant="outline" className="w-full" onClick={() => logInWithGoogle(postactionsGoogle, setError)}>
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
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
    </div>
  );
}
