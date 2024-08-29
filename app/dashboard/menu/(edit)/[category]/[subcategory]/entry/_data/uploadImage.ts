export const uploadImage = async (file: File) => {
  try {
    const response = await fetch("https://app-menu-go.onrender.com/upload-file", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "x-api-key": "13_singletest",
      },
      body: (() => {
        const formData = new FormData();
        formData.append("image", file);
        return formData;
      })(),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
