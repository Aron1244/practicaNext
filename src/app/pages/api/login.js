// src/pages/api/login.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  // Aquí deberías conectar con tu backend para autenticar al usuario.
  // Ejemplo de autenticación con datos duros:
  if (email === "admin@mail.com" && password === "admin") {
    // Puedes usar cookies o sesiones para mantener el estado del usuario.
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
