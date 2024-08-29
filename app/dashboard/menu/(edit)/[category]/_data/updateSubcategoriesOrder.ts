import { useCategoryStore } from "../_store/useCategoryStore";

export const useUpdateSubcategoriesOrder = () => {
  const { subcategories } = useCategoryStore();

  const updateOrder = async () => {
    const newOrder = subcategories.map((subcategory, index) => {
      return {
        id: subcategory.ID,
        order: index + 1,
      };
    });
    const data = {
      subcategories: newOrder,
    };

    await fetch(`https://app-menu-go.onrender.com/api/subcategory-order`, {
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
