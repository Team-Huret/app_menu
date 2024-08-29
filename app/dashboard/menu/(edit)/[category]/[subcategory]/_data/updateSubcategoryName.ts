export const updateSubcategoryName = async (subCategoryName: string, subcategoryId: number) => {
  const res = await fetch(`https://app-menu-go.onrender.com/api/subcategory/${subcategoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": "13_singletest",
    },
    body: JSON.stringify({
      name: subCategoryName,
    }),
  });
  const data = await res.json();
  return data;
};
