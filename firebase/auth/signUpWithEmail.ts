import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";
import { updateProfile } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUpWithEmail = async (fullName: string, email: string, password: string) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: fullName,
    });

    // Reference to the user document in Firestore
    const userDocRef = doc(db, "users", user.uid);

    // Check if the user already exists
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      throw new Error("The email address is already in use by another account.");
    } else {
      // Add the user to Firestore if not already existing
      await setDoc(userDocRef, {
        uid: user.uid,
        admin: false,
        email: user.email,
        full_name: fullName,
        created_at: serverTimestamp(),
      });
      return { success: "Account created successfully" };
    }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      throw new Error(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error(generateFirebaseAuthErrorMessage(error as FirebaseError) ?? "Error signing up with email and password");
  }
};
