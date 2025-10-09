import { useParams } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import { products } from "../../data/products";

const ProductsListContainer = () => {
  const { categoryId } = useParams();

  // Función para formatear el nombre de la categoría
  const formatCategoryName = (name) => {
    if (!name) return "";
    const cleanName = name.replace(/-/g, " "); 
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1); 
  };

  const filteredProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{formatCategoryName(categoryId)}</h2>
      <div className="row">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsListContainer;



