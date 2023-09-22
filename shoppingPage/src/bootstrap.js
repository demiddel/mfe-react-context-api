import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import faker from 'faker';

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
const root = createRoot(document.getElementById('root'));

root.render(<App data={initialData} />);
