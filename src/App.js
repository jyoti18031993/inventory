import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/nav";
import AfterNavLink from "./components/navbar/afterNavLink";
import Footer from "./components/footer/footer";
import AddProductForm from "./pages/add-product";
import AddOpeningStock from "./pages/add-opening-stock";
import AddPurchase from "./pages/add-purchase";
import AddSalesForm from "./pages/add-sales";
import OpeningStockTable from "./pages/opening-stock-table";
import PurchaseTable from "./pages/purchase-table";
import SalesTable from "./pages/sales-table";
import ClosingStockTable from "./pages/closing-stock-table";
import "./styles/global.css";
import Toast from "./pages/errorPopup";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AfterNavLink />
        <Routes>
          <Route path="/" element={<AddProductForm />} />
          <Route path="/add-opening-stock" element={<AddOpeningStock />} />
          <Route path="/add-purchase" element={<AddPurchase />} />
          <Route path="/add-sales" element={<AddSalesForm />} />
          <Route path="/opening-stock-table" element={<OpeningStockTable />} />
          <Route path="/errorPopup" element={<Toast />} />
          <Route path="/purchase-table" element={<PurchaseTable />} />
          <Route path="/sales-table" element={<SalesTable />} />
          <Route path="/closing-stock-table" element={<ClosingStockTable />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
