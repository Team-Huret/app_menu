import { useState, useEffect } from "react";
import { Entry } from "@/plugin/menu/types/menu";

export function useSearch(activeCategory: any, searchValue: string) {
  const [searchResults, setSearchResults] = useState<Entry[]>([]);

  useEffect(() => {
    if (searchValue === "") {
      setSearchResults([]);
      return;
    }

    let results: Entry[] = [];
    activeCategory.data.forEach((subcategory: any) => {
      const filteredData = subcategory.data.filter((item: any) => {
        const tryName = item.name.toLowerCase().includes(searchValue.toLowerCase());
        const tryDescription = item.description.toLowerCase().includes(searchValue.toLowerCase());
        const tryLabels = item.labels.some((label: { name: string }) => label.name.toLowerCase().includes(searchValue.toLowerCase()));

        return tryName || tryDescription || tryLabels;
      });

      if (filteredData.length > 0) results = results.concat(filteredData);
    });

    setSearchResults(results);
  }, [searchValue, activeCategory]);

  return searchResults;
}
