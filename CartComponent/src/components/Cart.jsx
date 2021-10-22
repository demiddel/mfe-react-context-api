import React from 'react';

const Cart = (props) => {
    if (!props) {
        return <div>Cart is Empty</div>;
    }

    return (
        <>
            <h1>Products:</h1>
            <section>
                {props.data.map((p) => (
                    <article key={p.id}>
                        <main>{p.name}</main>
                        <aside>{p.price}</aside>
                        <hr/>
                    </article>
                ))}
            </section>
        </>
    );
};

export { Cart };
