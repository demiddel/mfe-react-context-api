import React from 'react';

import { ProductListComponent } from './ProductListComponent';
// import { ProductListComponent } from 'product_components/ProductListComponent';
import { Cart } from './Cart';

const ShopPage = () => {
    return (
        <>
            <ProductListComponent />
            <hr />
            <Cart />
        </>
    );
};

export { ShopPage };
