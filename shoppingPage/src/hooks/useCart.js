import {createdGlobalState} from 'react-hooks-global-state';
import React, {useState} from "react";

export const useCart = () => {
    const [items, setItems] = useState([]);

    return {
        items, setItems
    }
}