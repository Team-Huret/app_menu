import { db } from "@/firebase/config";
import { collection, setDoc, doc, serverTimestamp } from "firebase/firestore";

export const addCollectionDoc = async (collectionName: string, data: any) => {
  try {
    // Create new document reference in the specified collection
    const newDocRef = doc(collection(db, collectionName));
    // Get the uid
    const newDocId = newDocRef.id;

    // Ajoutez l'UID aux données
    const dataWithId = { id: newDocId, created_at: serverTimestamp(), ...data };

    // Create the new document
    await setDoc(newDocRef, dataWithId);
    return true;
  } catch (error) {
    throw new Error("Error getting document");
  }
};
