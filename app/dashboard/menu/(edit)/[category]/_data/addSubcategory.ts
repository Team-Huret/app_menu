export const addSubcategory = async (subcategoryName: string, categoryId: number) => {
  try {
    const response = await fetch(`https://app-menu-go.onrender.com/api/subcategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": "13_singletest",
      },
      body: JSON.stringify({
        name: subcategoryName,
        category_id: categoryId,
        order: 1,
        entries: [],
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
