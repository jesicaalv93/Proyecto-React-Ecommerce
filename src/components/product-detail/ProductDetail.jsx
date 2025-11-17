import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import QuantitySelector from "./QuantitySelector";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setProduct({ id: resp.id, ...resp.data() });
        } else {
          setError("El producto no existe o fue eliminado.");
        }
      })
      .catch(() => setError("Error al obtener el producto."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAdd = (cantidad) => {
    addItem(product, cantidad);
    toast.success("Producto añadido al carrito");
  };

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return null;

  return (
    <div className="product-detail-container container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imagen}
            alt={product.titulo}
            className="product-image img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.titulo}</h2>
          <p>{product.descripcion}</p>
          <p><strong>Precio:</strong> ${product.precio}</p>

          <QuantitySelector onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
