import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const user = useSelector((state) => state.auth.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-800 shadow-md flex justify-between items-center px-6 py-3 z-50">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Smart Incident Reporter
      </h1>

      <div className="flex items-center gap-4">
        {/* Botón modo oscuro */}
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="px-3 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Usuario logeado o login */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {user.name}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md shadow-lg">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
