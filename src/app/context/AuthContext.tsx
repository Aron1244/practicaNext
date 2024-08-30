"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const router = useRouter(); // Agrega useRouter

  const login = (email: string, password: string) => {
    if (email === "admin@mail.com" && password === "123") {
      setIsAuthenticated(true);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    router.push("/"); // Redirige a la página principal
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, showToast, setShowToast }}
    >
      {children}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg animate-fadeInOut">
          ¡Inicio de sesión exitoso!
        </div>
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
