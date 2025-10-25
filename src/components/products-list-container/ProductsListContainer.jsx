import { useParams } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import { useState, useEffect } from "react";
import { DB } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductsListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  // Función para formatear el nombre de la categoría
  const formatCategoryName = (name) => {
    if (!name) return "";
    const cleanName = name.replace(/-/g, " ");
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
  };

  // Firebase
  useEffect(() => {
    setLoading(true);

    // Referencia a la colección de productos
    const prodCollection = collection(DB, "products");

    // Si hay categoryId, filtramos por esa categoría
    const consulta = categoryId
      ? query(prodCollection, where("categoryId", "==", categoryId))
      : prodCollection;

    // Ejecutar la consulta
    getDocs(consulta)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
      })
      .catch((error) => console.error("Error obteniendo productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  // Loading o error
  if (loading) {
    return <h2 className="text-center my-5">Cargando productos...</h2>;
  }

  // Render
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{formatCategoryName(categoryId)}</h2>
      <div className="row">
        {data.length > 0 ? (
          data.map((product) => (
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
