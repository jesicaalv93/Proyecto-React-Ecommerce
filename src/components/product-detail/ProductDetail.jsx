import { useParams } from "react-router-dom";
import { products } from "../../data/products";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imagen} alt={product.titulo} className="img-fluid rounded" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold">{product.titulo}</h2>
          <p className="text-muted">{product.descripcion}</p>
          <h4>${product.precio}</h4>
          <button className="btn btn-dark mt-3 w-50">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;