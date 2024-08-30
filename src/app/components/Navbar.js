// src/components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CarContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Mi Aplicación
        </Link>
        {/* Botón Hamburguesa */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none sm:hidden ml-auto"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center w-full sm:w-auto sm:justify-end ml-auto text-right`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4">
            <Link href="/" className="text-white hover:text-blue-200 px-4 py-2">
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-200 px-4 py-2"
            >
              About
            </Link>
            <Link
              href="/catalog"
              className="text-white hover:text-blue-200 px-4 py-2"
            >
              Catalog
            </Link>
            <Link
              href="/login"
              className="text-white hover:text-blue-200 px-4 py-2"
            >
              Login
            </Link>
            <div className="ml-auto">
              <Link
                href="/cart"
                className="relative inline-flex items-center text-white hover:text-blue-200 px-4 py-2"
              >
                Carrito
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
