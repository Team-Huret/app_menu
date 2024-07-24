import { collection, getDocs, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const updateAllCollectionDocs = async (collectionName: string, data: any) => {
  const collectionRef = collection(db, collectionName);
  try {
    const snapshot = await getDocs(collectionRef);
    const updatePromises = snapshot.docs.map((doc) => updateDoc(doc.ref, data));
    await Promise.all(updatePromises);
  } catch (error) {
    throw new Error("Error updating documents in collection");
  }
};
