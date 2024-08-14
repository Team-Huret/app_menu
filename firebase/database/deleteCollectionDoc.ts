import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config"; // Ajustez le chemin vers votre fichier de configuration firebase

export const deleteCollectionDoc = async (collectionName: string, docId: string): Promise<void> => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};
