import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import faker from "faker";

// const generateMockData = () => {
//     let mockData = [];
//
//     for (let i = 0; i < 5; i++) {
//         mockData.push({
//             id: i,
//             name: faker.commerce.productName(),
//             price: faker.commerce.price(),
//             color: faker.commerce.color(),
//             amount: Math.ceil(Math.random() * 10),
//         });
//     }
//     return mockData;
// };

const initialData = {
    id: 11,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    color: faker.commerce.color(),
    amount: Math.ceil(Math.random() * 10),
}

ReactDom.render(<App data={initialData} />, document.getElementById('root'))
