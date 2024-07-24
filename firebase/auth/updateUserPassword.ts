import {
  sendPasswordResetEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase/config";

export const updateUserPassword = async (
  password: string,
  newPassword: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setIsUpdatePasswordOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user logged in");

    if (auth.currentUser === null) {
      setMessage("No user logged in");
      throw new Error("No user logged in");
    }
    if (auth.currentUser.email === null) {
      setMessage("No user logged in");
      throw new Error("No user logged in");
    }
    if (!password || password === "") {
      setMessage("Please enter your current password");
      throw new Error("Please enter your current password");
    }
    // check if new password is valid
    if (!newPassword || newPassword === "") {
      setMessage("Please enter your new password");
      throw new Error("Please enter your new password");
    }
    setIsLoading(true);
    const userEmail = auth.currentUser.email;
    // Reauthenticate the user before updating the password
    const credential = EmailAuthProvider.credential(userEmail, password);
    await reauthenticateWithCredential(auth.currentUser, credential);

    // Update the password after successful reauthentication
    await updatePassword(auth.currentUser, newPassword);

    setIsUpdatePasswordOpen((prev) => !prev);
  } catch (error) {
    if (error instanceof FirebaseError) {
      setMessage(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error("Error updating password");
  } finally {
    setIsLoading(false);
  }
};
