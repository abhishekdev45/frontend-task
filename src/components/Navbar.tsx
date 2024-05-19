import React from 'react';
import { Link } from 'react-router-dom';

// Define props interface for Navbar component
interface NavbarProps {
  toggleSidebar: () => void; 
  open: boolean; 
}

// Define Navbar component
const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, open }) => {
  return (
    <nav className="bg-gradient-to-r from-teal-900 to-teal-600 text-white py-4 relative lg:hidden">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <h1 className="text-2xl font-bold ">Logo.</h1>
        </Link>
        {/* Sidebar toggle button */}
        <button
          className=" z-50 bg-teal-800 w-10 h-10 rounded drop-shadow-lg flex justify-center items-center text-white hover:bg-teal-700 duration-300"
          onClick={toggleSidebar} 
        >
          <span className="text-white">
            {/* Conditional rendering of icon based on sidebar state */}
            {open ? (
              // Icon for open sidebar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 m-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            ) : (
              // Icon for closed sidebar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 m-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 3.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 
