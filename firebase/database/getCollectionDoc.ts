import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { DocumentData } from "firebase/firestore";

type UserDoc = (collectionName: string, uid: string | undefined) => DocumentData | null;

export const getCollectionDoc: UserDoc = async (collectionName, uid) => {
  if (!uid) {
    throw new Error("User not found.");
  }
  const userDocRef = doc(db, collectionName, uid);
  try {
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      throw new Error("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw new Error("Error getting document");
  }
};
