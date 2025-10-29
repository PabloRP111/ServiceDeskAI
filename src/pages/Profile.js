import React from "react";

export default function Profile() {
  return (
    <div className="w-full max-w-md p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Perfil</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2">Nombre: Por definir</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Email: por.definir@email.com</p>
      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Tus reportes</h3>
      <ul className="space-y-2">
        <li className="p-3 bg-white dark:bg-gray-700 rounded shadow">Reporte 1</li>
        <li className="p-3 bg-white dark:bg-gray-700 rounded shadow">Reporte 2</li>
      </ul>
    </div>
  );
}
