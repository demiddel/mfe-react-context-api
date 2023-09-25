import React, { useContext } from 'react';
import { CartContext } from 'context_providers/CartContext';

const Cart = () => {
    const { cartData, removeCartItem } = useContext(CartContext);

    return (
        <div>
            Cart:
            {cartData &&
            cartData.map((item, i) => <div key={item.id + i}>
              Name: {item.name}
              Price: {item.price}
              <button onClick={() => removeCartItem(item.id)}>Remove Item</button>
              </div>)}
              Total: ${cartData.reduce((sum, item) => sum + Number(item.price), 0)}
        </div>
    );
};

export { Cart };
