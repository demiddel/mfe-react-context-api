import React from 'react';
import { Link } from 'react-router-dom';

const ProductComponent = ({ product }) => {
    if (!product) {
        return <>No Data Available</>;
    }

    return (
        <section>
            <main>Product: {product.name}</main>
            <aside>
                <Link
                    to={{
                        pathname: `/detail/${product.id}`,
                        state: { product },
                    }}
                >
                    <button>Show Detail</button>
                </Link>
            </aside>
        </section>
    );
};

export { ProductComponent };
