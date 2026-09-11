import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicNavbar from "./components/layout/PublicNavbar";
import PublicFooter from "./components/layout/PublicFooter";
import CustomerLayout from "./components/layout/CustomerLayout";
import AdminLayout from "./components/layout/AdminLayout";

const PublicTestPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <PublicNavbar />

      <main className="flex min-h-[60vh] items-center justify-center px-5">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-yellow-500">
            Public Layout
          </p>

          <h1 className="text-3xl font-extrabold text-[#172033]">
            Welcome to Pizzy 🍕
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
            This is a temporary test page for our public navbar and footer.
          </p>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

const CustomerTestPage = () => {
  return (
    <CustomerLayout>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-yellow-500">
            Customer Dashboard
          </p>

          <h2 className="mt-1 text-2xl font-extrabold text-[#172033]">
            Dashboard Test
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            We're testing the customer sidebar and header.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Active Orders
            </p>

            <p className="mt-2 text-3xl font-extrabold text-[#27245B]">
              2
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Completed Orders
            </p>

            <p className="mt-2 text-3xl font-extrabold text-[#27245B]">
              12
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Favourite Pizza
            </p>

            <p className="mt-2 text-lg font-extrabold text-[#27245B]">
              Pepperoni
            </p>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

const AdminTestPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-yellow-500">
            Admin Dashboard
          </p>

          <h2 className="mt-1 text-2xl font-extrabold text-[#172033]">
            Admin Dashboard Test
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            We're testing the admin sidebar and header.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Orders
            </p>

            <p className="mt-2 text-3xl font-extrabold text-[#27245B]">
              48
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Revenue
            </p>

            <p className="mt-2 text-3xl font-extrabold text-[#27245B]">
              ₦245k
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Low Stock Items
            </p>

            <p className="mt-2 text-3xl font-extrabold text-red-500">
              4
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<PublicTestPage />} />

        {/* Customer */}
        <Route path="/dashboard" element={<CustomerTestPage />} />

        {/* Admin */}
        <Route
          path="/admin/dashboard"
          element={<AdminTestPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;