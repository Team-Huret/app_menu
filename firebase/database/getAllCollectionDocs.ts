import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const getAllCollectionDocs = async (collectionName: string) => {
  const targetCollection = collection(db, collectionName);
  try {
    const data = await getDocs(targetCollection);
    return data;
  } catch (error) {
    throw new Error("Error getting document");
  }
};
