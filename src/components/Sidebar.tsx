import React from 'react';
import { Link } from 'react-router-dom';

// Define props interface for Sidebar component
interface SidebarProps {
  links: { path: string; label: string }[]; // Array of links with path and label
  open: boolean; // Boolean indicating whether sidebar is open or not
  toggleSidebar: () => void; // Function to toggle sidebar visibility
}

// Define Sidebar component
const Sidebar: React.FC<SidebarProps> = ({ links, open, toggleSidebar }) => {
  return (
    <div>
      {/* Sidebar container with dynamic CSS classes for transition */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gradient-to-r from-teal-900 to-teal-800 z-40 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 lg:w-48 w-52 px-2 transition-transform duration-300 ease-in-out`}
        style={{ zIndex: 50 }} 
      >
        <div className="">
          {/* Logo with link to home page */}
          <Link to="/">
            <h1 className="text-white font-bold text-3xl text-center p-5">LOGO</h1>
          </Link>
        </div>
        {/* List of links */}
        <ul className="pt-6">
          {/* Map through links array and render each link */}
          {links.map((link, index) => (
            <li
              key={index}
              className="flex rounded-md p-2 cursor-pointer hover:bg-teal-400 text-white items-center gap-x-4 mt-2"
              onClick={toggleSidebar} 
            >
              <Link to={link.path}>
                <span className="flex-1">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay to close sidebar on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar} 
        />
      )}
    </div>
  );
};

export default Sidebar; 
