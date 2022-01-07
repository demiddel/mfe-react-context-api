import React, { useState } from 'react';

const CartContext = React.createContext({
    cartData: [],
    addCartItem: (item) => {},
    removeCartItem: (itemId) => {},
});

const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addCartItemHandler = (item) => {
        setItems((prev) => [...prev, item]);
    };
    const removeCartItemHandler = (id) => {
        setItems(prev => [...prev.filter(i => i.id !== id)]);
    };

    const context = {
        cartData: items,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
    };

    return (
        <CartContext.Provider value={context}>{children}</CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
