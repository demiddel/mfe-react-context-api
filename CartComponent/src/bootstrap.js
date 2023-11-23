import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { faker } from '@faker-js/faker';

const render = (container, { initialData }) => {
    const root = createRoot(container)
    root.render(<App data={initialData} />);
};

if (process.env.NODE_ENV === 'development') {
    const container = document.querySelector('#_dev-cart');

    const generateMockData = () => {
        let mockData = [];

        for(let i =0; i < 5; i++) {
            mockData.push({
                id: i,
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                department: faker.commerce.department(),
                amount: Math.ceil(Math.random() * 10),
            })
        }
        return mockData;
    }
    const initialData = generateMockData();

    if (container) {
        render(container, { initialData });
    }
}

export { render };
