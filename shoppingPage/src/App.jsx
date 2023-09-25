import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Cart } from "./components/Cart";
// import { ProductListComponent } from "./components/ProductListComponent";
import { Header } from "./components/Header";
import { ShopPage } from "./components/ShopPage";
import { CartContextProvider } from "context_providers/CartContext";

import { faker } from '@faker-js/faker';

const generateMockData = () => {
    let mockData = [];

    for (let i = 0; i < 5; i++) {
        mockData.push({
            id: i + 1,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            department: faker.commerce.department(),
            amount: Math.ceil(Math.random() * 10),
        });
    }
    return mockData;
};

const initialData = generateMockData();

const Layout = () => (
  <>
  <Header />
  <Outlet />
  </>
);

const routes = [
  {
    element: <Layout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      { path: '/cart', element: <Cart />},
      // { path: '/products', element: <ProductListComponent />, products: []},
      { path: '/', element: <ShopPage />, products: initialData},
    ]
  }];

const router = createBrowserRouter(routes);

export default ({ data }) => (
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>
);
