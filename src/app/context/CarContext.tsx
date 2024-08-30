"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define el tipo para el producto
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

// Define el tipo para el contexto del carrito
interface CartContextType {
  cart: Product[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  showPaymentToast: () => void; // Nueva función para mostrar el toast de pago
}

// Crea el contexto del carrito
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState(false); // Estado para el toast de agregar al carrito
  const [paymentToast, setPaymentToast] = useState(false); // Estado para el toast de pago exitoso

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Mostrar el toast de agregar al carrito
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Nueva función para mostrar el toast de pago exitoso
  const showPaymentToast = () => {
    setPaymentToast(true);
    setTimeout(() => {
      setPaymentToast(false);
    }, 2000); // Duración del toast
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.length,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        showPaymentToast, // Proveer la función para el toast de pago
      }}
    >
      {children}
      {/* Toast de agregar al carrito */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-fadeInOut">
          ¡Producto agregado al carrito!
        </div>
      )}
      {/* Toast de pago exitoso */}
      {paymentToast && (
        <div className="fixed bottom-5 right-5 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg animate-fadeInOut">
          ¡Pago realizado con éxito!
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
