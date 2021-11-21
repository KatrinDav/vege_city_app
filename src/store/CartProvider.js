import React, { useReducer } from 'react';
import CartContext from "./cart_context";

const defaultState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const index = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[index];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    if (action.type === 'REMOVE') {
        const index = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[index];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    return defaultState;
}

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultState);

    const addItemHandler = (item) => {
        dispatch({ type: 'ADD', item: item })
    }
    const removeItemHandler = (id) => {
        dispatch({ type: 'REMOVE', id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;