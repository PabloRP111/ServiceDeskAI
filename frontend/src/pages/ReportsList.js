import React from "react";

export default function ReportsList() {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar reporte..."
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <h2 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Abiertos</h2>
      <ul className="space-y-2 mb-4">
        <li className="p-3 bg-white dark:bg-gray-800 dark:text-white rounded shadow">Reporte 1</li>
        <li className="p-3 bg-white dark:bg-gray-800 dark:text-white rounded shadow">Reporte 2</li>
      </ul>
      <h2 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Cerrados</h2>
      <ul className="space-y-2">
        <li className="p-3 bg-white dark:bg-gray-800 dark:text-white rounded shadow">Reporte 3</li>
      </ul>
    </div>
  );
}
