import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Cart } from "./components/Cart";
import { ProductListComponent } from "./components/ProductListComponent";
import { Header } from "./components/Header";
import { ShopPage } from "./components/ShopPage";
import { CartContextProvider } from "context_providers/CartContext";

export default ({ data }) => (
  <CartContextProvider>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/products" render={() => <ProductListComponent data={data} />} />
        <Route path="/" render={() => <ShopPage data={data} />} />
      </Switch>
    </BrowserRouter>
  </CartContextProvider>
);
