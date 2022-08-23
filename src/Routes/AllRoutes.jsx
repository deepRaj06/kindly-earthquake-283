import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProductList from "../Pages/ProductList";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/login" element="loign" />
      <Route path="/signup" element="loign" />
    </Routes>
  );
};

export default AllRoutes;
