// src/app/cart/page.tsx
"use client";

import { useCart } from "../context/CarContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-gray-900 font-bold">${product.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
