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
    if (entryLabels.length > 0) {
      for (const label of entryLabels) {
        formData.append("labels", label);
      }
    } else {
      formData.append("labels", "");
    }
    if (entryAllergies.length > 0) {
      for (const allergy of entryAllergies) {
        formData.append("allergies", allergy);
      }
    } else {
      formData.append("allergies", "");
    }
    // formData.append("options", entryOptions);
    if (badge === "") {
      formData.append("badge", null);
    } else {
      formData.append("badge", badge);
    }
    if (entryImage !== null) {
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
