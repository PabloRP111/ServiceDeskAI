import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";


function LoginPage()
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok)
        throw new Error(data.message || "Error al iniciar sesión");

      dispatch(login({ name: data.name, email: data.email }));

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email }));

      console.log("Respuesta del servidor:", data);
      navigate("/reports");
    } catch (err) {
      console.error(err);
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800">
      <Navbar user={null} />
      <div className="flex flex-1 justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-700 p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
            Login
          </h1>
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
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Entrar
          </button>
          {message && <p className="text-red-500 mt-2">{message}</p>}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Regístrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;