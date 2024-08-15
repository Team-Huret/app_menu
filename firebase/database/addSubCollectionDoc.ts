import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const addSubCollectionDoc = async (
  collectionName: string,
  documentId: string,
  subCollectionName: string,
  subDocumentId: string,
  data: any
) => {
  // Doc Ref
  const docRef = doc(db, collectionName, documentId);

  // Sub Collection Doc Ref
  const subCollectionDocRef = doc(collection(docRef, subCollectionName), subDocumentId);

  try {
    await setDoc(subCollectionDocRef, data);
    return true;
  } catch (e) {
    console.error("Erreur lors de l'ajout du document: ", e);
  }
};
