import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    // isItemInCart
    function isItemInCart(itemId) {
        return items.filter(i => i.item.id === itemId).length !== 0
    }

    // addItem
    const addItem = (item) => {
        if (!isItemInCart(item.id)) {
            setItems(prevItems => [...prevItems, { 'item': item, quantity: 1 }])
        } else {
            const selectedItem = items.filter(i => i.item.id === item.id)[0]
            ++selectedItem.quantity;

            const filteredItems = items.filter(i => i.item.id !== item.id)

            setItems(() => [...filteredItems, selectedItem])
        }
    }

    // removeItem
    const removeItem = (itemId) => {
        const filteredItems = items.filter(i => i.item.id !== itemId)
        setItems(() => filteredItems);
    }

    // clear
    const clearCart = () => setItems([]);


    return (
        <CartContext.Provider value={[items, addItem, removeItem, clearCart]}>
            {children}
        </CartContext.Provider>
    )
}
