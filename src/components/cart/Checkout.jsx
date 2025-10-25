import { useState } from "react";
import "./Checkout.css";

const Checkout = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
    observaciones: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si recibís una función onSubmit la ejecuta, si no hace console.log
    if (typeof onSubmit === "function") {
      onSubmit(formData);
    } else {
      console.log("Checkout form submitted:", formData);
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar compra</h2>
      <form className="checkout-form" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Ej: María"
            />
          </div>

          <div className="col">
            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              value={formData.apellido}
              onChange={handleChange}
              required
              placeholder="Ej: González"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="email@ejemplo.com"
            />
          </div>

          <div className="col">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="+54 9 11 1234 5678"
            />
          </div>
        </div>

        <div className="row">
          <div className="full">
            <label htmlFor="direccion">Dirección</label>
            <input
              id="direccion"
              name="direccion"
              type="text"
              value={formData.direccion}
              onChange={handleChange}
              required
              placeholder="Calle, número, piso, depto"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              id="ciudad"
              name="ciudad"
              type="text"
              value={formData.ciudad}
              onChange={handleChange}
              required
              placeholder="Ej: Córdoba"
            />
          </div>

          <div className="col">
            <label htmlFor="provincia">Provincia</label>
            <input
              id="provincia"
              name="provincia"
              type="text"
              value={formData.provincia}
              onChange={handleChange}
              required
              placeholder="Ej: Córdoba"
            />
          </div>

          <div className="col-sm">
            <label htmlFor="codigoPostal">Código Postal</label>
            <input
              id="codigoPostal"
              name="codigoPostal"
              type="text"
              value={formData.codigoPostal}
              onChange={handleChange}
              required
              placeholder="Ej: 5000"
            />
          </div>
        </div>

        <div className="row">
          <div className="full">
            <label htmlFor="observaciones">Observaciones (opcional)</label>
            <textarea
              id="observaciones"
              name="observaciones"
              rows="3"
              value={formData.observaciones}
              onChange={handleChange}
              placeholder="Horario de entrega, indicaciones, etc."
            />
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="btn-submit">
            Confirmar compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
