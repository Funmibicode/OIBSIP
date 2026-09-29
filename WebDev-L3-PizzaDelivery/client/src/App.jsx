import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/public/HomePage";
import Login from "./pages/auth/LoginPage";
import Register from "./pages/auth/RegisterPage";
import VerifyEmail from "./pages/auth/VerifyEmailPage";
import ForgotPassword from "./pages/auth/ForgotPasswordPage";
import ResetPassword from "./pages/auth/ResetPasswordPage";
import Dashboard from "./pages/customer/DashboardPage";
import PizzaBuilderPage from "./pages/customer/PizzaBuilderPage";
import Checkout from "./pages/customer/CheckoutPage";
import Orders from "./pages/customer/OrdersPage";
import OrderDetails from "./pages/customer/OrderDetailsPage";
import AdminLogin from "./pages/admin/AdminLoginPage";
import AdminDashboard from "./pages/admin/AdminDashboardPage";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        {/* Customer */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/order-pizza"
          element={<PizzaBuilderPage />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/orders/:orderId"
          element={<OrderDetails />}
        />

        {/* Admin */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;