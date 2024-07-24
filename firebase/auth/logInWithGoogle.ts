import { db, serverTimestamp, auth, GoogleAuthProvider, signInWithPopup } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";
import { updateProfile } from "firebase/auth";

type LogInWithGoogleFunc = (postActions: () => void, setError: (error: string) => void) => void;

export const logInWithGoogle: LogInWithGoogleFunc = async (postActions, setError) => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Reference to the user document in Firestore
    const userDocRef = doc(db, "users", user.uid);

    // Check if the user already exists
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      setError("The email address is already in use by another account.");
      throw new Error("The email address is already in use by another account.");
    } else {
      // Add the user to Firestore if not already existing
      await setDoc(userDocRef, {
        uid: user.uid,
        admin: false,
        email: user.email,
        full_name: user.displayName,
        created_at: serverTimestamp(),
      });
      postActions();
    }
    postActions();
  } catch (error: any) {
    if (error instanceof FirebaseError) {
      setError(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error(generateFirebaseAuthErrorMessage(error) ?? "Error logging in with Google");
  }
};
