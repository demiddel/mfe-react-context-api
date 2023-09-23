import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Cart } from "./components/Cart";
import { ProductListComponent } from "./components/ProductListComponent";
import { Header } from "./components/Header";
import { ShopPage } from "./components/ShopPage";
import { CartContextProvider } from "context_providers/CartContext";

export default ({ data }) => (
  <CartContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductListComponent data={data} />} />
        <Route path="/" element={<ShopPage data={data} />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
);
