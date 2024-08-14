import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase/config";

export const updateUserPassword = async (password: string, newPassword: string) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user logged in");
    const userEmail = user.email;
    if (!userEmail) throw new Error("User email not found");

    // Reauthenticate the user before updating the password
    const credential = EmailAuthProvider.credential(userEmail, password);
    await reauthenticateWithCredential(user, credential);

    // Update the password after successful reauthentication
    await updatePassword(user, newPassword);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error("Error updating password");
  }
};
