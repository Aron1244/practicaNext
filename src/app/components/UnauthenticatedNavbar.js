"use client";

import Link from "next/link";

export default function UnauthenticatedNavbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Mi Aplicación
        </Link>
        <div className="flex items-center">
          <Link href="/" className="text-white hover:text-blue-200 px-4">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200 px-4">
            About
          </Link>
          <Link href="/catalog" className="text-white hover:text-blue-200 px-4">
            Catalog
          </Link>
          <Link href="/login" className="text-white hover:text-blue-200 px-4">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
