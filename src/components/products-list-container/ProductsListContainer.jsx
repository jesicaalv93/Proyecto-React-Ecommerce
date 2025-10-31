import { useParams } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductsListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  const formatCategoryName = (name) => {
    if (!name) return "";
    const cleanName = name.replace(/-/g, " ");
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
  };

  useEffect(() => {
    setLoading(true);

    const prodCollection = collection(db, "products");
    const consulta = categoryId
      ? query(prodCollection, where("categoryId", "==", categoryId))
      : prodCollection;

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

  if (loading) {
    return <h2 className="text-center my-5">Cargando productos...</h2>;
  }

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
