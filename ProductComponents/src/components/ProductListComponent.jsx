import React, { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductComponent } from './ProductComponent';

const ProductListComponent = () => {
    const loaderProducts = useLoaderData();

    if (!loaderProducts) {
        return <>No Data Available</>;
    }
    return (
        loaderProducts &&
        loaderProducts.map((p) => (
            <Fragment key={p.id}>
                <h1>Product List Component</h1>
                <ProductComponent product={p} />
            </Fragment>
        ))
    );
};

export { ProductListComponent };
