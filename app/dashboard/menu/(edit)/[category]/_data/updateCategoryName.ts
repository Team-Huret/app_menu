export const updateCategoryName = async (categoryName: string, categoryId: number) => {
  const res = await fetch(`https://app-menu-go.onrender.com/api/category/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": "13_singletest",
    },
    body: JSON.stringify({
      name: categoryName,
    }),
  });
  const data = await res.json();
  return data;
};
