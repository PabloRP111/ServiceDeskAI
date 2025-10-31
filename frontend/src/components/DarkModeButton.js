import React from "react";

export default function DarkModeButton({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="
        absolute top-6 right-6
        px-3 py-2
        bg-gray-300 dark:bg-gray-700
        text-gray-900 dark:text-gray-100
        rounded-lg shadow-md
        hover:bg-gray-400 dark:hover:bg-gray-600
        transition-colors
      "
    >
      {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}
