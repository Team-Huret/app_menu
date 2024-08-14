import { auth } from "@/firebase/config";
import { sendEmailVerification } from "firebase/auth";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";

export const handleSendVerificationEmail = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user logged in");
    await sendEmailVerification(user);
    return { success: "Verification email sent. Please verify your email address." };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error);
      throw new Error(generateFirebaseAuthErrorMessage(error));
    } else {
      throw new Error("An error occurred, please try again later");
    }
  }
};
