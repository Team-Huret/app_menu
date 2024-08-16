"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logInWithGoogle } from "@/firebase/auth/logInWithGoogle";
import { useState } from "react";
import { signUpWithEmail } from "@/firebase/auth/signUpWithEmail";
import { verifyPassword } from "@/lib/functions/stringFunctions";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/app/(auth)/_components/ErrorMessage";
import SuccessMessage from "@/app/(auth)/_components/SuccessMessage";
import { isStringContainsOnlyLetters } from "@/lib/functions/stringFunctions";
import { useLoader } from "@/lib/functions/useLoader";

export default function Signup() {
  const router = useRouter();
  const { isLoading, execute } = useLoader();

  // Register states field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register states actions
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Register with email function
  const handleSignupEmail = () => {
    setSuccess("");
    setError("");
    if (password === "" || firstName === "" || lastName === "" || email === "") {
      setError("Please fill in all fields");
      return;
    }
    if (!isStringContainsOnlyLetters(firstName) || !isStringContainsOnlyLetters(lastName)) {
      setError("First name and last name must contain only letters");
      return;
    }
    if (!verifyPassword(password)) {
      setError("Password must be between 6 to 20 characters long, and contain at least one uppercase letter, one lowercase letter, and one number");
      return;
    }
    const fullName = firstName + " " + lastName;

    execute(() => {
      const req = signUpWithEmail(fullName, email, password);
      return req
        .then((data) => {
          setSuccess(data.success);
          router.push("/login");
          setTimeout(() => router.push("/login"), 1500);
        })
        .catch((error) => setError(error.message));
    });
  };
  // Register with google function
  const handleSignupGoogle = () => {
    setSuccess("");
    setError("");
    execute(() => {
      const req = logInWithGoogle();
      return req
        .then((data) => {
          setSuccess(data.success);
          setTimeout(() => router.push("/login"), 1500);
        })
        .catch((error) => setError(error.message));
    });
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
                <Input id="first-name" placeholder="Max" required onChange={(e) => setFirstName(e.target.value)} disabled={isLoading} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required onChange={(e) => setLastName(e.target.value)} disabled={isLoading} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
            </div>
            <ErrorMessage message={error} />
            <SuccessMessage message={success} />
            <Button className="w-full" onClick={handleSignupEmail} disabled={isLoading}>
              Create an account
            </Button>
            <Button variant="outline" className="w-full" onClick={handleSignupGoogle} disabled={isLoading}>
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
    </div>
  );
}
