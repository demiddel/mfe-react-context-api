import React from 'react';
// import { ProductListComponent } from "./ProductListComponent";
import { Cart } from "./Cart";

const ShopPage = ({data}) => {
    return (<>
        {/* <ProductListComponent data={data} /> */}
        <hr/>
        <Cart />
    </>);
};

export { ShopPage };
