import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// TODO: only used for dev, might be a better solution so this isn't being imported
import faker from 'faker';

const render = (
    el,
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

    ReactDom.render(<App history={history} data={initialData} />, el);

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
    const el = document.querySelector('#_dev-product-components');

    const initialData = [
        {
            id: 1,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            color: faker.commerce.color(),
        },
        {
            id: 2,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            color: faker.commerce.color(),
        },
    ];

    if (el) {
        render(el, { defaultHistory: createBrowserHistory(), initialData });
    }
}

export { render };
