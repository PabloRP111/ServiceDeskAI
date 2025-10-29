import React from "react";

export default function FooterMenu({ activePage, setActivePage }) {
  const pages = ["ReportsList", "UploadReport", "Profile"];
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-around bg-gray-50 dark:bg-gray-900 p-3 rounded-t-lg shadow-md">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => setActivePage(page)}
          className={`px-4 py-2 rounded-full transition-colors
            ${activePage === page
              ? "bg-blue-600 text-white"
              : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
