import { Option } from "@/types/menu";

interface EntryData {
  name: string;
  description: string;
  price: number;
  options: Option[];
  labels: string[];
  allergies: string[];
  photo: File | null;
  subcategory_id: number;
  badge: string;
}

export const addEntry = async (entryData: EntryData) => {
  console.log(entryData);

  try {
    const formData = new FormData();
    formData.append("name", entryData.name);
    formData.append("order", "1");
    formData.append("description", entryData.description);
    formData.append("image", entryData.photo ?? "");
    formData.append("base_price", entryData.price.toString());
    if (entryData.labels.length > 0) {
      for (const label of entryData.labels) {
        formData.append("labels", label);
      }
    } else {
      formData.append("labels", "");
    }
    if (entryData.allergies.length > 0) {
      for (const allergy of entryData.allergies) {
        formData.append("allergies", allergy);
      }
    } else {
      formData.append("allergies", "");
    }
    // formData.append("options", JSON.stringify([]));
    formData.append("badge", entryData.badge);
    formData.append("subcategory_id", entryData.subcategory_id.toString());
    const response = await fetch("https://app-menu-go.onrender.com/api/entry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "x-api-key": "13_singletest",
      },
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
