"use server";
import { z } from "zod";
import { LoginSchema } from "@/schemas/auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }
  return {
    success: "Login successful",
  };
};

export const register = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }
  return {
    success: "Account created successfully",
  };
};
