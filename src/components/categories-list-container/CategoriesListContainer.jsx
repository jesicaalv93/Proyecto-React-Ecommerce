import { useGetCategories } from "../../hooks/useGetCategories";
import CategoryItem from "../category-item/CategoryItem";

const CategoriesListContainer = () => {
  const { categories, loading } = useGetCategories();

  if (loading) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Categorías</h2>
      <div className="row justify-content-center">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesListContainer;