import "./App.module.scss";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manufacturer from "./pages/Manufacturer/Manufacturer";
import { Link } from "react-router-dom";
import Distributor from "./pages/Distributor/Distributor";
import Distributors from "./screens/manufacturerScreen/Distributors/Distributors";
import Orders from "./screens/manufacturerScreen/Orders/Orders";
import Rewards from "./screens/manufacturerScreen/Rewards/Rewards";
import Customers from "./screens/manufacturerScreen/Customers/Customers";
import Reports from "./screens/manufacturerScreen/Reports/Reports";
import ProductsD from './screens/distributorScreen/Products/Products'
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <>
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/manufacturer/products" element={<Manufacturer />} />
        <Route path="/manufacturer/distributors" element={<Distributors />} />
        <Route path="/manufacturer/orders" element={<Orders />} />
        <Route path="/manufacturer/rewards" element={<Rewards />} />
        <Route path="/manufacturer/reports" element={<Reports />} />
        <Route path="/manufacturer/customers" element={<Customers />} />
        <Route path="/distributor/products" element={<ProductsD />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
  </>
);
  
}

export default App;
