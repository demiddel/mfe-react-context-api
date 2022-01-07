import React, { Fragment, useContext } from 'react';
import { ProductComponent } from './ProductComponent';

const ProductListComponent = ({ products }) =>
    products &&
    products.map((p) => (
        <Fragment key={p.id}>
            <ProductComponent product={p} />
        </Fragment>
    ));

export { ProductListComponent };
