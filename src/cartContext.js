import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);

    // isItemInCart
    function isItemInCart(itemId) {
        return items.filter(i => i.item.id === itemId).length !== 0
    }

    // addItem
    const addItem = (item, quantity) => {
        if (!isItemInCart(item.id)) {
            setItems(prevItems => [...prevItems, { 'item': item, quantity }])
        } else {
            const selectedItem = items.filter(i => i.item.id === item.id)[0]
            selectedItem.quantity = selectedItem.quantity + quantity;

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

    useEffect(() => {
        // totalItems
        const totalItemsResult = items.reduce((a, b) => a + parseInt(b.quantity), 0);
        setTotalItems(totalItemsResult);

        // totalPrice
        const totalPriceResult = items.reduce((a, b) => a + (parseInt(b.item.price) * parseInt(b.quantity)), 0);
        setTotalPrice(totalPriceResult)
    }, [items])
    

    


    return (
        <CartContext.Provider value={[items, addItem, removeItem, clearCart, totalItems, totalPrice]}>
            {children}
        </CartContext.Provider>
    )
}
