import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProductList from "../Pages/Products/ProductList";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from "../Pages/Error/Error";
import ProductListByCity from "../Pages/Products/ProductListByCity";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:sortBy" element={<ProductListByCity />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
