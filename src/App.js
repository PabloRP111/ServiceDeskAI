import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from './store/navigationSlice';
import DarkModeButton from './components/DarkModeButton';
import ReportsList from './pages/ReportsList';
import UploadReport from './pages/UploadReport';
import Profile from './pages/Profile';
import { toggleDarkMode } from './store/darkModeSlice';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
  const activePage = useSelector(state => state.navigation.activePage);
  const darkMode = useSelector(state => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderPage = () => {
    switch (activePage) {
      case 'ReportsList':
        return <ReportsList />;
      case 'UploadReport':
        return <UploadReport />;
      case 'Profile':
        return <Profile />;
      default:
        return <UploadReport />;
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-50 dark:bg-gray-900 relative flex flex-col items-center p-6`}>
      {/* Botón modo oscuro */}
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="
          absolute top-6 right-6
          px-3 py-1.5
          bg-gray-300 dark:bg-gray-700
          text-gray-900 dark:text-gray-100
          rounded-lg
          shadow-md
          hover:bg-gray-400 dark:hover:bg-gray-600
          transition-colors
        "
      >
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>

      {/* Header */}
      <div className="mt-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          Smart Incident Reporter
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-base sm:text-lg">
          Reporte rápido de incidencias
        </p>
      </div>

      {/* Contenido dinámico centrado */}
      <div className="flex-1 w-full mt-12 mb-24 flex flex-col items-center">
        {renderPage()} {/* Tu función que renderiza páginas según activePage */}
      </div>

      {/* Footer menú flotante */}
      <div className="absolute bottom-4 left-0 w-full flex justify-around bg-gray-50 dark:bg-gray-900 p-2 rounded-t-lg shadow-md">
        {["ReportsList", "UploadReport", "Profile"].map(page => (
          <button
            key={page}
            onClick={() => dispatch(setActivePage(page))}
            className={`px-4 py-3 rounded-full transition-colors
              ${activePage === page ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"}
            `}
          >
            {page}
          </button>
        ))}
      </div>

    </div>
  );
}

export default App;
