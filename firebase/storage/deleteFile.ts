import { storage } from "@/firebase/config";
import { ref, deleteObject } from "firebase/storage";

export const deleteFile = async (fileURL: string) => {
  try {
    // Extraire le chemin du fichier de l'URL
    const filePath = decodeURIComponent(fileURL.split("/o/")[1].split("?")[0]);

    // Créer une référence au fichier
    const fileRef = ref(storage, filePath);

    // Supprimer le fichier
    await deleteObject(fileRef);
    console.log(`File ${filePath} deleted successfully`);
    return true;
  } catch (error) {
    console.error("Error deleting file:", error);
    return false;
  }
};
