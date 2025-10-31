import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [office, setOffice] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, office }),
      });

      const data = await res.json();

      if (!res.ok)
        throw new Error(data.message || "Error al registrar");

      // Guardar token y redirigir
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/login");
    } catch (err) {
      console.error(err);
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={null} />
      <div className="bg-white dark:bg-gray-800 flex flex-1 justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-700 p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
            Registro
          </h1>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded border"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded border"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded border"
            required
          />
          <input
            type="text"
            placeholder="Oficina"
            value={office}
            onChange={(e) => setOffice(e.target.value)}
            className="p-2 rounded border"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
          {message && (
            <p className="text-center text-red-500 mt-2">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
