import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import "./Home.css";

const message = "Bienvenida a Latir";

function Home() {
  const featuredProducts = products.filter(product => product.destacado);

  return (
    <div className="container my-5 text-center">
      <h1 className="fw-bold">{message}</h1>
      <p className="mt-4">
        Ofrecemos prendas versátiles y atemporales, pensadas para la mujer con estilo que valora la elegancia en lo simple.<br />
        Cada pieza es de industria nacional, creada con dedicación y cuidado para acompañarte en todos tus momentos.
      </p>

      {featuredProducts.length > 0 && (
        <>
          <h3 className="mt-5 mb-4">Productos Destacados</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {featuredProducts.map(product => (
              <div key={product.id} className="col">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <div className="card h-100 product-card">
                    <div className="card-img-wrapper">
                      <img 
                        src={product.imagen} 
                        className="card-img-top" 
                        alt={product.titulo} 
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">{product.titulo}</h6>
                      <p className="card-text">${product.precio.toLocaleString()}</p>
                      <button className="btn-terra mt-3 w-50">Ver detalle</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
