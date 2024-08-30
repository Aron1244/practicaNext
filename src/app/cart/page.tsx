"use client";

import { useCart } from "../context/CarContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    showPaymentToast,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handlePayment = () => {
    clearCart(); // Vaciar el carrito
    showPaymentToast(); // Mostrar el toast de pago exitoso
  };

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
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
                >
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-600 text-white py-2 px-4 ml-4 rounded-md hover:bg-red-700"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Mostrar el precio total */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
      </div>
      {/* Botón de pagar */}
      <button
        onClick={handlePayment}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
      >
        Pagar
      </button>
    </div>
  );
}
