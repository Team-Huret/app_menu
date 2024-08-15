import { addSubCollectionDoc } from "@/firebase/database/addSubCollectionDoc";

export const postCategory = async (categoryName: string) => {
  const data = { order: 999 };
  await addSubCollectionDoc("business", "PEG8sjvy5RX742ZKyx2G", "menu", categoryName, data);
};
