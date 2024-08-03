"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { logInWithEmail } from "@/firebase/auth/logInWithEmail";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { logInWithGoogle } from "@/firebase/auth/logInWithGoogle";

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const postactions = () => {
    setLoading(false);
    setError("");
    router.push("/dashboard");
  };
  const handleSubmit = () => {
    if (password === "" || email === "") {
      setError("Please fill in all fields");
    } else {
      setLoading(true);
      logInWithEmail(email, password, postactions, setError);
    }
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
              <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="text-red-500 text-sm">{error}</p>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              {loading && <ImSpinner9 className="animate-spin size-4 mr-3" />}
              Login
            </Button>
            <Button variant="outline" className="w-full" onClick={() => logInWithGoogle(postactions, setError)}>
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
