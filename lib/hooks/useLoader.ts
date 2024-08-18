import { useState, useCallback } from "react";

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(async (asyncFunction: () => Promise<any>) => {
    setIsLoading(true);
    try {
      await asyncFunction();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, execute };
};
