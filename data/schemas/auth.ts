import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z
    .string({
      message: "Invalid password",
    })
    .min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z
    .string({
      message: "Invalid password",
    })
    .min(6, { message: "Minimum 6 characters is required" }),
  firstName: z.string().min(1, { message: "Please enter your first name" }),
  lastName: z.string().min(1, { message: "Please enter your last name" }),
});
