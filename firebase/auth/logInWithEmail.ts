import { auth, signInWithEmailAndPassword } from "@/firebase/config";
import { generateFirebaseAuthErrorMessage } from "./authError";
import { FirebaseError } from "firebase/app";

type logInWithEmailFunc = (
  email: string,
  password: string,
  posActions: () => void,
  setError: (error: string) => void
) => void;

export const logInWithEmail: logInWithEmailFunc = async (
  email,
  password,
  posActions,
  setError
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    posActions();
  } catch (error: any) {
    if (error instanceof FirebaseError) {
      setError(generateFirebaseAuthErrorMessage(error));
    }
    throw new Error(
      generateFirebaseAuthErrorMessage(error) ??
        "Error logging in with email and password"
    );
  }
};
