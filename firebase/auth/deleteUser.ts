// deleteUser.js
import { auth } from "@/firebase/config";
import { deleteUser } from "firebase/auth";
import { deleteCollectionDoc } from "@/firebase/database/deleteCollectionDoc";

export const deleteUserAccount = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not found");
    await deleteCollectionDoc("users", user.uid);
    await deleteUser(user);
    return { success: "User deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting user , please try again later");
  }
};

export default deleteUserAccount;
