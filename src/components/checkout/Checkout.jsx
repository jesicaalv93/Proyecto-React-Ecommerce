import { useState, useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../context/CartContext";
import { 
    collection, 
    addDoc, 
    serverTimestamp, 
    doc, 
    writeBatch, // 💡 Necesario para la lógica de stock
    getDoc 
} from "firebase/firestore";
import { db } from "../../firebase";
import CheckoutForm from "./CheckoutForm"; // 💡 Importamos el nuevo componente

const removeUndefined = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v !== undefined)
    );
};

const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext); 

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

    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [firebaseError, setFirebaseError] = useState(null);

    // ... (El resto de las funciones handleChange y validateForm se mantienen igual)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        
        if (formErrors[name]) {
            setFormErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        const errors = {};
        // Validación... (Mantenemos la lógica de validación)
        if (!formData.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
        if (!formData.apellido.trim()) errors.apellido = "El apellido es obligatorio.";
        if (!formData.email.trim()) errors.email = "El email es obligatorio.";
        if (!formData.telefono.trim()) errors.telefono = "El teléfono es obligatorio.";
        if (!formData.direccion.trim()) errors.direccion = "La dirección es obligatoria.";
        if (!formData.ciudad.trim()) errors.ciudad = "La ciudad es obligatoria.";
        if (!formData.provincia.trim()) errors.provincia = "La provincia es obligatoria.";
        if (!formData.codigoPostal.trim()) errors.codigoPostal = "El código postal es obligatorio.";
        if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "El formato del email no es válido.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    // ...

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFirebaseError(null); 
        
        if (!validateForm() || cart.length === 0) {
            if (cart.length === 0) {
                setFirebaseError("El carrito está vacío. Por favor, añade productos antes de finalizar.");
            }
            return;
        }
        if (total === undefined || total === null) {
            setFirebaseError("No se pudo calcular el total de la compra.");
            return; 
        }

        setLoading(true);

        const cleanedBuyerData = removeUndefined(formData);
        
        const order = {
            comprador: cleanedBuyerData,
            items: cart.map((item) => ({
                id: item.id,
                titulo: item.titulo,
                precio: item.precio,
                // CORRECCIÓN: Usar 'quantity'
                cantidad: item.quantity, 
            })),
            total: total, 
            fecha: serverTimestamp(),
        };

        try {
            // 💡 PARTE NUEVA: Implementar la actualización de stock
            const batch = writeBatch(db); // Inicializamos el batch

            // 1. Verificamos stock y preparamos la actualización
            for (const item of cart) {
                const docRef = doc(db, "products", item.id);
                const productSnap = await getDoc(docRef);

                if (!productSnap.exists()) {
                    throw new Error(`El producto con ID ${item.id} ya no existe.`);
                }
                
                const product = productSnap.data();
                const newStock = product.stock - item.quantity;
                
                if (newStock < 0) {
                    // Si el stock es insuficiente, cancelamos la operación
                    throw new Error(`Stock insuficiente para ${item.titulo}. Stock actual: ${product.stock}`);
                }
                
                // Agregamos la operación de actualización al batch
                batch.update(docRef, { stock: newStock });
            }

            // 2. Ejecutamos el batch de stock y luego guardamos la orden
            await batch.commit(); // ✅ Stock actualizado con éxito

            // 3. Guardamos la orden
            const docRef = await addDoc(collection(db, "orders"), order);

            setOrderId(docRef.id);
            clearCart();
            
        } catch (error) {
            console.error("Error al guardar la orden o actualizar stock:", error);
            // Mostrar error específico al usuario si es por stock
            if (error.message.includes("Stock insuficiente")) {
                 setFirebaseError(error.message);
            } else {
                 setFirebaseError("Ocurrió un error al procesar tu compra. Inténtalo de nuevo."); 
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-container">
            {!orderId ? (
                <>
                    <h2 className="checkout-title">Finalizar compra</h2>
                    
                    {firebaseError && (
                        <div className="error-message firebase-error-box">
                            {firebaseError}
                        </div>
                    )}

                    {/* 💡 USAMOS EL COMPONENTE REFRACTORIZADO */}
                    <CheckoutForm 
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        loading={loading}
                        formErrors={formErrors}
                    />
                </>
            ) : (
                <div className="success-message">
                    <h2>✅ ¡Compra generada con éxito!</h2>
                    <p>
                        Gracias por tu compra. Tu número de orden es:{" "}
                        <strong>{orderId}</strong>
                    </p>
                    <p>
                        Nos pondremos en contacto dentro de las próximas 48 hs para
                        coordinar la forma de pago y entrega.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Checkout;