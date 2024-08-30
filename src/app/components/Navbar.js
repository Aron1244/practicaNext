// src/components/Navbar.js
"use client";

import Link from 'next/link';
import { useCart } from '../context/CarContext';

export default function Navbar() {
    const { cartCount } = useCart();

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-bold">
                    Mi Aplicación
                </Link>
                <div className="flex items-center">
                    <Link href="/" className="text-white hover:text-blue-200 px-4">Home</Link>
                    <Link href="/about" className="text-white hover:text-blue-200 px-4">About</Link>
                    <Link href="/catalog" className="text-white hover:text-blue-200 px-4">Catalog</Link>
                    <Link href="/login" className="text-white hover:text-blue-200 px-4">Login</Link>
                    <Link href="/cart" className="relative inline-flex items-center text-white hover:text-blue-200 px-4">
                        Carrito
                        {cartCount > 0 && (
                            <span className="absolute top-0 left-20 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
