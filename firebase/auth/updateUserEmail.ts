import { EmailAuthProvider, reauthenticateWithCredential, sendEmailVerification, updateEmail } from "firebase/auth";
import { auth } from "@/firebase/config";
import { updateCollectionDoc } from "@/firebase/database/updateCollectionDoc";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";

export const updateUserEmail = async (email: string, newEmail: string, password: string) => {
  const user = auth.currentUser;
  if (!user) return { error: "User not found" };
  if (user.providerData[0] && user.providerData[0].providerId !== "password") {
    return { error: "You cannot change your email if you signed up with a third-party provider" };
  }

  try {
    // Get the credential for the current user
    const credential = EmailAuthProvider.credential(email, password);

    // Reauthenticate the user before updating the email because it is required for Firebase
    await reauthenticateWithCredential(user, credential);

    // Update the email after successful reauthentication
    await updateEmail(user, newEmail);

    // Send email verification to the new email
    await sendEmailVerification(user);

    // Update the user document in Firestore
    await updateCollectionDoc("users", user.uid, {
      email: newEmail,
    });
    return { success: "Email updated successfully, please verify your new email address" };
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof FirebaseError) {
      throw new Error(generateFirebaseAuthErrorMessage(error));
    } else {
      throw new Error("Error updating email");
    }
  }
};
