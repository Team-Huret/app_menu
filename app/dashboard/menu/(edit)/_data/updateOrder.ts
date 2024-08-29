import { useMenuStore } from "@/app/dashboard/menu/(edit)/_store/useMenuStore";

export const useUpdateOrder = () => {
  const { categories, categoriesName } = useMenuStore();

  const updateOrder = async () => {
    const newOrder = categoriesName.map((categoryName, index) => {
      const id = categories.find((category) => category.Name === categoryName)?.ID;
      return {
        id: id,
        order: index + 1,
      };
    });
    const data = {
      categories: newOrder,
    };

    await fetch(`https://app-menu-go.onrender.com/api/category-order`, {
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
