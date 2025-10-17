import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { products } from "../../data/products";
import { CartContext } from "../context/CartContext.jsx";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const { addItem, isInCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Producto no encontrado.</p>;

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="product-detail-container container my-5">
  <div className="row">
    <div className="col-md-6">
      <div className="product-image-wrapper">
        <img
          src={product.imagen}
          alt={product.titulo}
          className="product-image img-fluid rounded"
        />
      </div>
    </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="product-title fw-bold">{product.titulo}</h2>
          <p className="product-description text-muted">{product.descripcion}</p>
          <h4 className="product-price">${product.precio}</h4>

          <div className="quantity-container my-3">
            <label htmlFor="quantity" className="me-2">
              Cantidad:
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="quantity-input"
            />
          </div>

          <button className="btn btn-dark w-50" onClick={handleAddToCart}>
            {isInCart(product.id) ? "Agregar más" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
