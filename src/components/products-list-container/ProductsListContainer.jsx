import { useParams } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import { products } from "../../data/products";

const ProductsListContainer = () => {
  const { categoryId } = useParams();

  const filteredProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-capitalize">{categoryId}</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsListContainer;


