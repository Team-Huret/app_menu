"use server";
import { z } from "zod";
import { LoginSchema } from "@/data/schemas/auth";
import { RegisterSchema } from "@/data/schemas/auth";
import bcrypt from "bcryptjs";
import { db } from "@/data/db/db";
import { getUserByEmail } from "@/data/db/user";
import { signIn, signOut } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }
  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password" };
        default:
          return { error: "Something went wrong, please try again" };
      }
    }
    throw error;
  }
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }
  const { email, password, firstName, lastName } = values;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return {
      error: "Email already in use",
    };
  }
  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name: `${firstName.toLocaleLowerCase()} ${lastName.toLocaleLowerCase()}`,
    },
  });
  return {
    success: "Account created successfully",
  };
};

export const logout = async () => {
  await signOut({
    redirectTo: "/",
  });
};
