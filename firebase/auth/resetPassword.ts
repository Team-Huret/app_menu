import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/config";

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error("Erreur lors de l'envoi de l'email de réinitialisation de mot de passe");
  }
};
