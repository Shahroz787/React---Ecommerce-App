import React from "react";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/ProductList/ProductList";
import Register from "./Pages/Register/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Navbar/Header";


const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/product_list" element={<ProductList />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
