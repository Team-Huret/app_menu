import { storage } from "@/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const uploadFile = async (file: File, storagePath: string) => {
  const storageRef = ref(storage, `${storagePath}${uuidv4()}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};
