export const addCategory = async (categoryName: string) => {
  try {
    const response = await fetch("https://app-menu-go.onrender.com/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": "13_singletest",
      },
      body: JSON.stringify({
        name: categoryName,
        order: 1,
        subcategories: [],
      }),
    });
    const data = await response.json();
    console.log(data);
    console.log("posted");
  } catch (error) {
    console.log(error);
  }
};
