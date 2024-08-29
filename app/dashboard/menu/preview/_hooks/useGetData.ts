import { useState, useEffect } from "react";
import { Menu } from "@/plugin/menu/types/menu";

export function useGetData() {
  const [data, setData] = useState<Menu | null>(null);

  useEffect(() => {
    fetch("https://api.mocki.io/v2/cge9r1ed/menu")
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
      })
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return { data };
}
