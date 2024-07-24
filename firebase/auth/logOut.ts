import { auth } from "../config";
import { signOut } from "firebase/auth";

type PostActions = () => void;

export const logOut = async (postActions: PostActions) => {
  try {
    await signOut(auth);
    postActions();
  } catch (error) {
    throw new Error("Error signing out");
  }
};
