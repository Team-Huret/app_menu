import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

export const logOut = async () => {
  try {
    await signOut(auth);
    return { success: "Signed out successfully" };
  } catch (error) {
    throw new Error("Error signing out");
  }
};
