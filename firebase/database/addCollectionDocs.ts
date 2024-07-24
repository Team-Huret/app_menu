import { db } from "@/firebase/config";
import { collection, setDoc, doc } from "firebase/firestore";

export const addCollectionDocs = async (collectionName: string, data: any) => {
  try {
    // Créez une référence de document pour générer un UID
    const newDocRef = doc(collection(db, collectionName));
    const newDocId = newDocRef.id;

    // Ajoutez l'UID aux données
    const dataWithId = { id: newDocId, ...data };

    // Utilisez setDoc au lieu de addDoc pour ajouter les données avec l'UID généré
    await setDoc(newDocRef, dataWithId);
  } catch (error) {
    throw new Error("Error getting document");
  }
};
