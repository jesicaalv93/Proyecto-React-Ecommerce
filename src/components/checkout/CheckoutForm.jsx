import React from 'react';

const CheckoutForm = ({ 
    formData, 
    handleChange, 
    handleSubmit, 
    loading, 
    formErrors 
}) => {
    return (
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
            <div className="row">
                {/* Nombre */}
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
                    {formErrors.nombre && (
                        <p className="error-text">{formErrors.nombre}</p>
                    )}
                </div>

                {/* Apellido */}
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
                    {formErrors.apellido && (
                        <p className="error-text">{formErrors.apellido}</p>
                    )}
                </div>
            </div>

            <div className="row">
                {/* Email */}
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
                    {formErrors.email && (
                        <p className="error-text">{formErrors.email}</p>
                    )}
                </div>

                {/* Teléfono */}
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
                    {formErrors.telefono && (
                        <p className="error-text">{formErrors.telefono}</p>
                    )}
                </div>
            </div>

            <div className="row">
                {/* Dirección */}
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
                    {formErrors.direccion && (
                        <p className="error-text">{formErrors.direccion}</p>
                    )}
                </div>
            </div>

            <div className="row">
                {/* Ciudad */}
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
                    {formErrors.ciudad && (
                        <p className="error-text">{formErrors.ciudad}</p>
                    )}
                </div>

                {/* Provincia */}
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
                    {formErrors.provincia && (
                        <p className="error-text">{formErrors.provincia}</p>
                    )}
                </div>

                {/* Código Postal */}
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
                    {formErrors.codigoPostal && (
                        <p className="error-text">{formErrors.codigoPostal}</p>
                    )}
                </div>
            </div>

            <div className="row">
                {/* Observaciones */}
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
                <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? "Generando orden..." : "Confirmar compra"}
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;