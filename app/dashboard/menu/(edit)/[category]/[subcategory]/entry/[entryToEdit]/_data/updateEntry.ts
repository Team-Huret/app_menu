import { useEntryStore } from "../../_store/useEntryStore";
import { useSubcategoryStore } from "../../../_store/useSubcategoryStore";
import { useCategoryStore } from "../../../../_store/useCategoryStore";
import { useRouter } from "next/navigation";

export const useUpdateEntry = () => {
  const { subcategoryName } = useSubcategoryStore();
  const { categoryName } = useCategoryStore();
  const router = useRouter();

  const {
    entryName,
    entryDescription,
    entryPrice,
    entryOptions,
    entryLabels,
    entryAllergies,
    badge,
    entryImage,
    entryToEditId,
    setError,
    setEntryImage,
    setEntryName,
    setEntryDescription,
    setEntryPrice,
    setEntryOptions,
    setEntryLabels,
    setEntryAllergies,
    setBadge,
  } = useEntryStore();

  const resetState = () => {
    setEntryImage(null);
    setEntryName("");
    setEntryDescription("");
    setEntryPrice(0);
    setEntryOptions([]);
    setEntryLabels([]);
    setEntryAllergies([]);
    setBadge("");
  };

  const updateEntry = async () => {
    if (entryName === "" || entryPrice === 0 || !entryToEditId) {
      setError("Please fill in all the required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", entryName);
    formData.append("description", entryDescription);
    formData.append("base_price", entryPrice.toString());
    // formData.append("labels", entryLabels);
    // formData.append("allergies", entryAllergies);
    // formData.append("options", entryOptions);
    //formData.append("badge", badge);
    if (entryImage) {
      formData.append("image", entryImage);
    }

    try {
      const response = await fetch(`https://app-menu-go.onrender.com/api/entry/${entryToEditId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "x-api-key": "13_singletest",
        },
        body: formData,
      });
      const data = await response.json();
      if (data) {
        resetState();
        window.location.replace(`/dashboard/menu/${categoryName}/${subcategoryName}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goBack = () => {
    resetState();
    router.push(`/dashboard/menu/${categoryName}/${subcategoryName}`);
  };

  return { updateEntry, goBack };
};
