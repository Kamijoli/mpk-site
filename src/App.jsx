import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import Product from "./pages/Product";
import About from "./pages/About";
import UserDocs from "./pages/UserDocs";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="page">
      <div className="frame">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:categoryId" element={<Category />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<UserDocs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
           </Routes>
           

        </main>
        <Footer />
      </div>
    </div>
  );
}
