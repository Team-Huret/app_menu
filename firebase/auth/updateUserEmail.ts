import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  updateEmail,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import { updateCollectionDoc } from "@/firebase/database/updateCollectionDoc";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";

export const updateUserEmail = async (
  email: string,
  newEmail: string,
  password: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setIsUpdateEmailOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    if (auth.currentUser === null) return;

    setIsLoading(true);

    // Reauthenticate the user before updating the email
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(auth.currentUser, credential);

    // Update the email after successful reauthentication
    await updateEmail(auth.currentUser, newEmail);

    // Send email verification to the new email
    await sendEmailVerification(auth.currentUser);
    await updateCollectionDoc("users", auth.currentUser.uid, {
      email: newEmail,
    });
    setIsUpdateEmailOpen((prev) => !prev);
  } catch (error) {
    if (error instanceof FirebaseError) {
      setMessage(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error("Error updating email");
  } finally {
    setIsLoading(false);
  }
};

export const handleSendVerificationEmail = async (
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      setMessage("No user logged in");
      throw new Error("No user logged in");
    }
    await sendEmailVerification(user);
    setMessage("Verification email sent. Please verify your email address.");
  } catch (error: any) {
    setMessage("An error occurred, please try again");
    throw new Error("An error occurred, please try again");
  }
};
