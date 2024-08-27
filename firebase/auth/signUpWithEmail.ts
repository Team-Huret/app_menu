import { auth } from "@/firebase/config";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";
import { updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUpWithEmail = async (fullName: string, email: string, password: string) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: fullName,
    });

    // Add user to database
    // const response = await fetch("https://app-menu-go.onrender.com/api/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "x-api-key": "ADMIN_4dddab9c-018e-4555-ae45-d219a5dbd83c",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     full_name: fullName,
    //   }),
    // });
    // const data = await response.json();

    return { success: "Account created successfully" };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      throw new Error(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error(generateFirebaseAuthErrorMessage(error as FirebaseError) ?? "Error signing up with email and password");
  }
};
