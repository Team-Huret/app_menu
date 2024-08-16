import { useEffect } from "react";
import { db } from "@/firebase/config";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_data/useMenuStore";

export const useGetCategories = () => {
  const { setCategoriesList } = useMenuStore();
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "business", "PEG8sjvy5RX742ZKyx2G", "menu"), (snapshot) => {
      const docsData: any[] = [];
      snapshot.forEach((doc) => {
        docsData.push({ id: doc.id, ...doc.data() });
      });
      setCategoriesList(docsData);
      const docsList = docsData.map((doc) => ({ id: doc.id, order: doc.order }));
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
