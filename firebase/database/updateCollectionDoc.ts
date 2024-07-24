import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const updateCollectionDoc = async (collectionName: string, uid: string | undefined, data: any) => {
  if (!uid) {
    throw new Error("User not found.");
  }
  const userDocRef = doc(db, collectionName, uid);
  try {
    await updateDoc(userDocRef, data);
  } catch (error) {
    throw new Error("Error updating document");
  }
};
