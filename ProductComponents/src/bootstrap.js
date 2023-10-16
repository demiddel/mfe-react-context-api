import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';

import { Layout } from './components/shared/Layout';
import Root from './App';

// TODO: only used for dev, might be a better solution so this isn't being imported
import { faker } from '@faker-js/faker';

import { ProductListComponent } from './components/ProductListComponent';

// INFO: When testing with the Profiler, it looks that using the Lazy components are taking longer to load
// const { ProductDetail } = lazy(() => import('./components/ProductDetail'));
// const { ErrorRoute } = lazy(() => import('./components/shared/ErrorRoute'));

import { ProductDetail } from './components/ProductDetail';
import { ErrorRoute } from './components/shared/ErrorRoute';

// const routes = [
//     { path: '/detail/:id', element: <ProductDetail /> },
//     { path: '/', element: <ProductListComponent />, loader: () => [] },
// ];

const render = (container, { defaultRouter, pathname, hydrationData }) => {
    const routes = (initialData) => [
        {
            element: <Layout />,
            errorElement: <ErrorRoute />,
            children: [
                {
                    path: '/',
                    exact: true,
                    index: true,
                    element: <ProductListComponent />,
                    loader: () => initialData,
                },
                {
                    path: '/detail/:id',
                    element: <ProductDetail />,
                    loader: ({ params }) =>
                        initialData.find((d) => d.id === Number(params.id)),
                },
            ],
        },
    ];

    const router =
        defaultRouter ||
        createMemoryRouter(routes([]), {
            basename: 'products',
            initialEntries: ['/', '/detail/:id'],
            initialIndex: 0,
            hydrationData,
        });

    // FIXME: if container is already a 'createRoot' instance, then skip it.
    const root = createRoot(container);

    root.render(<Root router={router} />);
};

if (process.env.NODE_ENV === 'development') {
    const container = document.querySelector('#_dev-product-components');

    const initialData = [
        {
            id: 1,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            department: faker.commerce.department(),
        },
        {
            id: 2,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            department: faker.commerce.department(),
        },
    ];

    if (container) {
        //TODO: Need to refactor to pass initialData to the ProductListComponent
        const routesWithInitialData = [
            {
                element: <Layout />,
                errorElement: <ErrorRoute />,
                children: [
                    {
                        path: '/',
                        index: true,
                        element: <ProductListComponent />,
                        loader: () => initialData,
                    },
                    {
                        path: '/detail/:id',
                        element: <ProductDetail />,
                        loader: ({ params }) =>
                            initialData.find((d) => d.id === Number(params.id)),
                    },
                ],
            },
        ];

        render(container, {
            initialData,
            defaultRouter: createBrowserRouter(routesWithInitialData),
        });
    }
}

export { render };
