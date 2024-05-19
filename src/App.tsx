
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  // State to manage the sidebar open/close state of sidebar
  const [open, setOpen] = useState(false);

  // Define the links for the sidebar
  const sidebarLinks = [
    { path: '/contact', label: 'Contacts' },
    { path: '/charts-maps', label: 'Charts & Maps' },
  ];

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} open={open} />
      <div className="flex">
        <Sidebar links={sidebarLinks} open={open} toggleSidebar={toggleSidebar} />
        <AllRoutes />{/* Main content area where routes are rendered */}
      </div>
      {open && ( 
        <div className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" onClick={toggleSidebar} />
      )} {/* Overlay for mobile view when sidebar is open */}
    </div>
  );
};

export default App;
