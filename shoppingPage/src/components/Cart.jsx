import React, { useContext } from 'react';
import { CartContext } from 'context_providers/CartContext';

const Cart = () => {
    const { cartData, removeCartItem } = useContext(CartContext);

    return (
        <div>
            Cart:
            {cartData &&
                cartData.map((item) => (
                    // If ItemID is not unique, then we need to merge the quantity
                    <div key={item.id}>
                        Name: {item.name}
                        Price: {item.price}
                        <button onClick={() => removeCartItem(item.id)}>
                            Remove Item
                        </button>
                    </div>
                ))}
            Total: $
            {cartData.reduce((sum, item) => sum + Number(item.price), 0)}
        </div>
    );
};

export { Cart };
