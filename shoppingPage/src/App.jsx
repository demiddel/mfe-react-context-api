import React, { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/shared/Layout';
import { ShopPage } from './components/ShopPage';
import { CartContextProvider } from 'context_providers/CartContext';
import { Cart } from './components/Cart';
import { ProductListComponent } from './components/ProductListComponent';

import { faker } from '@faker-js/faker';

// const { Cart } = lazy(() => import('./components/Cart'));
// const { ProductListComponent } = lazy(() =>
//     import('./components/ProductListComponent')
// );

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

const routes = [
    {
        element: <Layout />,
        errorElement: <h1>Not Found</h1>,
        children: [
            { path: '/cart', element: <Cart /> },
            {
                path: '/products',
                element: <ProductListComponent />,
                loader: () => initialData,
            },
            { path: '/', element: <ShopPage />, loader: () => initialData },
        ],
    },
];

const router = createBrowserRouter(routes);

export default ({ data }) => (
    <CartContextProvider>
        <RouterProvider router={router} />
    </CartContextProvider>
);
