// src/app/context/CarContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define el tipo para el producto
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

// Define el tipo para el contexto del carrito
interface CartContextType {
  cart: Product[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

// Crea el contexto del carrito
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount: cart.length, addToCart, removeFromCart }}
    >
      {children}
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
