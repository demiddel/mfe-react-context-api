import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { ShoppingPage } from "./components/ShoppingPage";
import { Cart } from "./components/Cart";
import { ProductComponents } from "./components/ProductComponents";
import {Header} from "./components/Header";

export default ({ data }) => (
  <BrowserRouter>
      <Header />
      <Switch>
        {/*<Route path="/" component={ShoppingPage} />*/}
      <Route path="/cart" component={Cart} />
      <Route path="/" render={() => <ProductComponents data={data} />} />
    </Switch>
  </BrowserRouter>
);
