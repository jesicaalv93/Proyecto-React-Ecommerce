import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, titulo, imagen, precio } = product;
  console.log("Producto:", product);


  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <div className="card shadow-sm">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body text-center">
          <h6 className="card-title">{titulo}</h6>
          <p className="fw-bold">${precio}</p>
          <Link to={`/product/${product.id}`} className="btn btn-dark btn-sm">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
