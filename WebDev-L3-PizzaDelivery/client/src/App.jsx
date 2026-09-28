import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from "./pages/customer/DashboardPage";
import PizzaBuilderPage from "./pages/customer/PizzaBuilderPage";
import Checkout from "./pages/customer/CheckoutPage";
import Orders from "./pages/customer/OrdersPage";
import OrderDetails from "./pages/customer/OrderDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
    
        
      
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/order-pizza"
          element={<PizzaBuilderPage />}
        />

        <Route
          path="/Checkout"
          element={<Checkout />}
        />

         <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/orders/:orderId"
          element={<OrderDetails />}
        />

      

      </Routes>
    </BrowserRouter>
  );
};

export default App;