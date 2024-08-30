import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-50">
      <h1 className="text-3xl font-semibold text-blue-900 mb-4">
        Página About
      </h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Esta es la página About usando la estructura de "app directory".
      </p>
      <Link href="/" className="text-blue-500 hover:text-blue-700 font-medium">
        Home
      </Link>
    </div>
  );
}
