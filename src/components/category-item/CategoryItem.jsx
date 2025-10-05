import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  const { titulo, imagen } = category;

  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <div className="category-card shadow-sm">
        <img src={imagen} alt={titulo} />
        <div className="overlay">
          <h5 className="fw-bold text-center">{titulo}</h5>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

