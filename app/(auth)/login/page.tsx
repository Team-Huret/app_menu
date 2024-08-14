"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { logInWithEmail } from "@/firebase/auth/logInWithEmail";
import { useState } from "react";
import { logInWithGoogle } from "@/firebase/auth/logInWithGoogle";
import ErrorMessage from "@/components/auth/ErrorMessage";
import SuccessMessage from "@/components/auth/SuccessMessage";
import { useLoader } from "@/lib/functions/useLoader";

export default function Login() {
  const router = useRouter();
  const { isLoading, execute } = useLoader();

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleLoginEmail = () => {
    if (password === "" || email === "") {
      setError("Please fill in all fields");
      return;
    }
    execute(() => {
      const req = logInWithEmail(email, password);
      return req
        .then((data) => {
          if (data.success) {
            router.push("/dashboard");
          }
        })
        .catch((error) => setError(error.message));
    });
  };
  const handleLoginGoogle = () => {
    execute(() => {
      const req = logInWithGoogle();
      return req
        .then((data) => {
          if (data.success) {
            router.push("/dashboard");
          }
        })
        .catch((error) => setError(error.message));
    });
  };
  return (
    <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-0">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
            </div>
            <SuccessMessage message={success} />
            <ErrorMessage message={error} />
            <Button type="submit" className="w-full" onClick={handleLoginEmail} disabled={isLoading}>
              Login
            </Button>
            <Button variant="outline" className="w-full" onClick={handleLoginGoogle} disabled={isLoading}>
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
