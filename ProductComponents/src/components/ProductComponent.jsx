import React from 'react';
import { Link } from 'react-router-dom';

const ProductComponent = ({ product }) => {
    return (
        <section>
            <main>Product: {product.name}</main>
            <aside>
                <Link to={`/detail/${product.id}`}>
                    <button>Show Detail</button>
                </Link>
            </aside>
        </section>
    );
};

export { ProductComponent };
