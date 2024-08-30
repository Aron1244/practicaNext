import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bienvenido a la Página Principal
      </h1>
      <p className="text-gray-600 mb-6">
        Esta es la página principal usando la estructura de "app directory".
      </p>
      <Link href="/about" className="text-blue-500 hover:text-blue-700 font-semibold">About</Link>
    </div>
  );
}
