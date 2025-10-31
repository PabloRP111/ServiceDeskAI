import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../store/navigationSlice';
import Navbar from './Navbar';
import ReportsList from '../pages/ReportsList';
import UploadReport from '../pages/UploadReport';
import Profile from '../pages/Profile';

function ProtectedAppLayout() {
  const dispatch = useDispatch();
  const activePage = useSelector(state => state.navigation.activePage);
  const renderPage = () => {
    switch (activePage) {
      case 'ReportsList': return <ReportsList />;
      case 'UploadReport': return <UploadReport />;
      case 'Profile': return <Profile />;
      default: return <UploadReport />;
    }
  };

  const getPageTitle = () => {
    switch (activePage) {
      case "ReportsList": return "Lista de Reportes";
      case "UploadReport": return "Subir Nuevo Reporte";
      case "Profile": return "Perfil de Usuario";
      default: return "";
    }
  };

  return (
    <div className={` min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center p-6`}>
      <Navbar />

      <div className="flex-1 w-full mt-20 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl pb-10 font-extrabold text-gray-900 dark:text-gray-100">
          {getPageTitle()}
        </h1>
        {renderPage()}
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-around bg-gray-50 dark:bg-gray-900 py-6 rounded-t-lg shadow-md">
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

export default ProtectedAppLayout;