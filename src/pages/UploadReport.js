import React from "react";

export default function UploadReport() {
  return (
    <div className="w-full max-w-md p-4 bg-gray-100 dark:bg-gray-800 rounded shadow flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        Upload Report
      </h2>
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
        Imagen del incidente
      </div>
      <textarea
        placeholder="Describe el incidente..."
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
      />
      <div className="flex justify-between w-full">
        <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded shadow">
          Añadir coordenadas
        </button>
        <button className="px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded shadow">
          Añadir reporte
        </button>
      </div>
    </div>
  );
}
