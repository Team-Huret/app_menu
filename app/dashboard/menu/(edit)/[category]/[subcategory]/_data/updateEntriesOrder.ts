import { useSubcategoryStore } from "../_store/useSubcategoryStore";

export const useUpdateEntriesOrder = () => {
  const { entries } = useSubcategoryStore();

  const updateOrder = async () => {
    const newOrder = entries.map((entry, index) => {
      return {
        id: entry.ID,
        order: index + 1,
      };
    });
    const data = {
      entries: newOrder,
    };

    await fetch(`https://app-menu-go.onrender.com/api/entry-order`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": "13_singletest",
      },
      body: JSON.stringify(data),
    });
  };

  return { updateOrder };
};
