import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/config";

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: "Password reset email sent successfully" };
  } catch (error) {
    throw new Error("Error sending password reset email, please try again later");
  }
};
