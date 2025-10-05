import { useState, useEffect } from "react";
import categoriesData from "../data/categories.json";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga asincrónica
    setTimeout(() => {
      setCategories(categoriesData);
      setLoading(false);
    }, 500);
  }, []);

  return { categories, loading };
};