import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

