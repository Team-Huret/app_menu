import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";

export const useUpdateOrder = () => {
  const { categories, categoriesName } = useMenuStore();

  const updateOrder = () => {
    const newOrder = categoriesName.map((categoryName, index) => {
      let id = categories.find((category) => category.Name === categoryName)?.ID;
      return {
        id: id,
        name: categoryName,
        order: index,
      };
    });

    newOrder.forEach((category) => {
      const update = async () => {
        await fetch(`https://app-menu-go.onrender.com/api/category/${category.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-api-key": "13_singletest",
          },
          body: JSON.stringify({
            order: category.order + 1,
            name: category.name,
          }),
        });
      };
      update();
    });
  };

  return { updateOrder };
};
