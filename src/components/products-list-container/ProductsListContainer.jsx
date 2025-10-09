import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import productsData from "../../data/products";

const ProductsListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filtered = productsData.filter(
        (product) => product.category === categoryId
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productsData);
    }
  }, [categoryId]);

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-center">
        {categoryId ? `Productos de ${categoryId}` : "Todos los productos"}
      </h2>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p>${product.price}</p>
                <NavLink to={`/item/${product.id}`} className="btn btn-dark">
                  Ver detalle
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsListContainer;