import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  const { titulo, imagen, id } = category;
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <Link to={`/category/${id}`} className="text-decoration-none text-dark">
        <div className="category-card shadow-sm">
          <img src={imagen} alt={titulo} />
          <div className="overlay">
            <h5 className="fw-bold text-center">{titulo}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;

