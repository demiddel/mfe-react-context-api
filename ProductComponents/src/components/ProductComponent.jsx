import React from 'react';
import { Link } from 'react-router-dom';

const ProductComponent = ({ product }) => {
    if (!product) {
        return <>No Data Available</>;
    }

    // FIXME: State is not being transferred to ProductDetail component
    return (
        <section style={{"backgroundColor": "#81ecec"}}>
            <main>Product: {product.name}</main>
            <aside>
                <Link
                    to={`/detail/${product.id}`}
                    state={product}
                >
                    <button>Show Detail</button>
                </Link>
            </aside>
        </section>
    );
};

export { ProductComponent };
