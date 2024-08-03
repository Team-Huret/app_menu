import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, createUserWithEmailAndPassword, db, serverTimestamp } from "@/firebase/config";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";
import { updateProfile } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { User } from "firebase/auth";
type SignUpWithEmailFunc = (
  fullName: string,
  email: string,
  password: string,
  setError: (error: string) => void,
  postActions: (user: User) => void
) => void;

export const signUpWithEmail: SignUpWithEmailFunc = async (fullName, email, password, setError, postActions) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const updateUserName = await updateProfile(user, {
      displayName: fullName,
    });

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
        full_name: fullName,
        created_at: serverTimestamp(),
      });
      await sendEmailVerification(user);
      postActions(user);
    }
  } catch (error: any) {
    if (error instanceof FirebaseError) {
      setError(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error(generateFirebaseAuthErrorMessage(error) ?? "Error signing up with email and password");
  }
};
