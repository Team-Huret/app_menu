import { db, auth } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";

export const logInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    // Sign in with Google and get the user's credential
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Reference to the user document in Firestore
    const userDocRef = doc(db, "users", user.uid);

    // Check if the user already exists
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // Add the user to Firestore if not already existing
      await setDoc(userDocRef, {
        uid: user.uid,
        admin: false,
        email: user.email,
        full_name: user.displayName,
        created_at: serverTimestamp(),
      });
      return { success: "Account successfully created" };
    }
    return { success: "Logged in successfully" };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      throw new Error(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error(generateFirebaseAuthErrorMessage(error as FirebaseError) ?? "Error logging in with Google");
  }
};
