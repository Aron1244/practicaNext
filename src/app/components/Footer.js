export default function Footer() {
    return (
        <footer className="bg-blue-600 p-4 text-center text-white">
            <p>&copy; {new Date().getFullYear()} Mi aplicación. Todos los derechos reservados</p>
        </footer>
    );
}