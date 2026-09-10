import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Header */}
        <AdminHeader />

        {/* Page Content */}
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