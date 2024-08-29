export const deletecategory = async (categoryId: number) => {
  const res = await fetch(`https://app-menu-go.onrender.com/api/category/${categoryId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": "13_singletest",
    },
  });
  const data = await res.json();

  return data;
};
