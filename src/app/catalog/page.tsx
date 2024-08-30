// src/app/catalog/page.tsx
"use client";

import { useCart } from "../context/CarContext";

// Define el tipo para el producto (sin la propiedad `quantity` aquí)
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string; // La propiedad de imagen ahora es opcional
};

// Ejemplo de productos
const products: Product[] = [
  {
    id: 1,
    name: "Producto 1",
    description: "Descripción del producto 1",
    price: 10,
    image: "", // Vacío para usar placeholder
  },
  {
    id: 2,
    name: "Producto 2",
    description: "Descripción del producto 2",
    price: 20,
    image: "", // Producto con imagen
  },
  {
    id: 3,
    name: "Producto 3",
    description: "Descripción del producto 3",
    price: 30,
    image: "", // Vacío para usar placeholder
  },
];

export default function Catalog() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Catálogo de Productos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={
                product.image ||
                "https://via.placeholder.com/300x200?text=Producto"
              } // Placeholder si no hay imagen
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-900 font-bold mb-4">${product.price}</p>
            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
