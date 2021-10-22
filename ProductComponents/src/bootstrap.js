import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const render = (el) => {
    ReactDom.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_dev-product-components');

    if (el) {
        render(el);
    }
}

export { render };
