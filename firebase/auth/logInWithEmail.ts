import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";

export const logInWithEmail = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: "Logged in successfully" };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      throw new Error(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error(generateFirebaseAuthErrorMessage(error as FirebaseError) ?? "Error logging in with email and password");
  }
};
