import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedAppLayout from "./components/ProtectedAppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const user = useSelector(state => state.auth.user); // Redux user
  const darkMode = useSelector(state => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas protegidas */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <ProtectedAppLayout />
            </ProtectedRoute>
          }
        />

        {/* Catch-all: redirige según login */}
        <Route path="*" element={<Navigate to={user ? "/reports" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
