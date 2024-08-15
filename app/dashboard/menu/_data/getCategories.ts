import { useEffect } from "react";
import { db } from "@/firebase/config";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { useState } from "react";

interface Category {
  id: string;
  order: number;
}

export const useGetCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "business", "PEG8sjvy5RX742ZKyx2G", "menu"), (snapshot) => {
      const docsList: Category[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        docsList.push({ id: doc.id, order: data.order });
      });
      docsList.sort((a, b) => a.order - b.order);
      setCategories(docsList.map((doc) => doc.id));
    });
    return () => unsubscribe();
  }, []);

  const updateOrder = () => {
    const collectionRef = collection(db, "business", "PEG8sjvy5RX742ZKyx2G", "menu");

    categories.forEach((category, index) => {
      const docRef = doc(collectionRef, category);
      const req = async () => {
        await updateDoc(docRef, { order: index });
      };
      req();
    });

    console.log("Order updated successfully");
  };

  return { categories, setCategories, updateOrder };
};
