import React, { useState } from "react";
import { Text } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import ProductList from "pages/ProductList";
import Aboutus from "pages/Aboutus";
import Homepage from "pages/Homepage";
import Contact from "pages/Contact";
import Shop from "pages/Shop";
import Login from "pages/Login";
import Register from "pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  const [navBtn, setNavBtn] = useState(false);

  const handleMobileMenu = () => {
    setNavBtn(!navBtn);
  };
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/products/:category"
          element={
            <ProductList navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
          }
        />
        <Route
          path="/shop"
          element={<Shop navBtn={navBtn} handleMobileMenu={handleMobileMenu} />}
        />
        <Route
          path="/contact"
          element={
            <Contact navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
          }
        />
        <Route
          path="/"
          element={
            <Homepage navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
          }
        />

        <Route
          path="/aboutus"
          element={
            <Aboutus navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
          }
        />

        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
export default App;
