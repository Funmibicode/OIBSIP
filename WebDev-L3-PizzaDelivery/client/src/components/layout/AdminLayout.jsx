import React, { useState } from 'react';
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      <div className="md:ml-64">
        <AdminHeader onMenuClick={openSidebar} />

        <main className="px-5 py-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;