// deleteUser.js
import { auth } from "@/firebase/config";
import { deleteUser } from "firebase/auth";
import { deleteCollectionDoc } from "@/firebase/database/deleteCollectionDoc";

export const deleteUserAccount = async () => {
  const user = auth.currentUser;

  if (user) {
    try {
      await deleteCollectionDoc("users", user.uid);
      await deleteUser(user);
      return true;
    } catch (error) {
      throw new Error("Error deleting user: " + error);
    }
  } else {
    console.error("No user is currently logged in.");
    return false;
  }
};

export default deleteUserAccount;
