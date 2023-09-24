import React from 'react';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { RouterProvider, createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import Root from './App';

// TODO: only used for dev, might be a better solution so this isn't being imported
import { faker } from '@faker-js/faker';

// FIXME: Router issues, probably need to import RouterProvider here and select which is needed to then wrap in render method.
// Refactored App.js to only export RouterProvider
import { ProductListComponent } from './components/ProductListComponent';
import { ProductDetail } from './components/ProductDetail';

const routes = [{ path: '/', element: <ProductListComponent />, products: []}, { path: '/detail:id', element: <ProductDetail />}];
const render = (
    container,
    { onNavigate, defaultHistory, initialPath, initialData, defaultRouter }
) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });
    const router = defaultRouter || createMemoryRouter(routes, {initialEntries: [initialPath]});
    if (onNavigate) {
        history.listen(onNavigate);
    }

    const root = createRoot(container);
    // TODO: Probably needs the RouterProvider here to create a real BrowserRouter to work with the Link and context
    // FIXME: The actual navigation is not working 
    root.render(<Root router={router} />);

    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
    };
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
        const routesWithInitialData = [{ path: '/', element: <ProductListComponent />, products: initialData}, { path: '/detail:id', element: <ProductDetail />}];

        render(container, { defaultHistory: createBrowserHistory(), initialData, defaultRouter: createBrowserRouter(routesWithInitialData) });
    }
}

export { render };
