"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas/auth";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import AuthError from "@/components/auth/AuthError";
import AuthSuccess from "@/components/auth/AuthSuccess";
import { register } from "@/actions/auth";

export default function Signup() {
  const [error, setError] = useState<string | undefined>("");
  const [succes, setSucces] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSucces("");
    startTransition(() => {
      register(values).then((data) => {
        setSucces(data.success);
        setError(data.error);
      });
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
          <Form {...form}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }: any) => (
                    <div className="grid gap-2">
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="John" type="text" disabled={isPending} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }: any) => (
                    <div className="grid gap-2">
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Doe" type="text" disabled={isPending} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }: any) => (
                  <div className="grid gap-2">
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="m@example.com" type="email" disabled={isPending} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }: any) => (
                  <div className="grid gap-2">
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="******" type="password" disabled={isPending} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <AuthError message={error} />
              <AuthSuccess message={succes} />
              <Button type="submit" className="w-full" disabled={isPending} onClick={form.handleSubmit(() => {})}>
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
      {/* <AlertDialog open={open} onOpenChange={setOpen}>
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
            <Button variant="outline">Resend Email</Button>
            <Button>
              <Link href="/login">Login</Link>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}
    </div>
  );
}
