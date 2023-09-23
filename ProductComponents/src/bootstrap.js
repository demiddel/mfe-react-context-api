import React from 'react';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { RouterProvider, useLocation } from 'react-router-dom';
import App from './App';

// TODO: only used for dev, might be a better solution so this isn't being imported
import { faker } from '@faker-js/faker';

const render = (
    container,
    { onNavigate, defaultHistory, initialPath, initialData }
) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });
    if (onNavigate) {
        history.listen(onNavigate);
    }

    const root = createRoot(container);
    root.render(<App history={history} data={initialData} />, <RouterProvider router={defaultHistory} />);

    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = useLocation();

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
        render(container, { defaultHistory: createBrowserHistory(), initialData });
    }
}

export { render };
