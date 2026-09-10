import CustomerSidebar from "./CustomerSidebar";
import CustomerHeader from "./CustomerHeader";

const CustomerLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      {/* Sidebar */}
      <CustomerSidebar />

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Header */}
        <CustomerHeader />

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

export default CustomerLayout;