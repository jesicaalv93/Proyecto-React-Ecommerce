import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Intentamos cargar el carrito desde localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    // Inicializa el carrito como un array vacío si no hay datos en localStorage
    return storedCart ? JSON.parse(storedCart) : []; 
  });

  // Guardar cambios en localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(prod => prod.id === item.id);

      if (existingItem) {
        return prevCart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  // Función para calcular el total
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
  };

  const total = getTotal();


  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addItem, 
        removeItem, 
        clear, 
        isInCart,
        total 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};