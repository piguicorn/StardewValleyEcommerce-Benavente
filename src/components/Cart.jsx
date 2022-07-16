import React, { useContext } from 'react';
import { CartContext } from '../cartContext';

export default function Cart() {
    const [items, , removeItem, clearCart] = useContext(CartContext);

    return (<main>
        <h1 style={{
            color: "#282828",
            fontWeight: 500,
            textAlign: "center"
        }}>Items in Cart:</h1>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((entry, index) =>
                        <tr key={index}>
                            <td>{entry.item.name}</td>
                            <td>{entry.item.description}</td>
                            <td>{entry.item.price}</td>
                            <td>{entry.quantity}</td>
                            <td><button onClick={() => removeItem(entry.item.id)}>Remove</button></td>
                        </tr>)
                }
            </tbody>
        </table>
        <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
    </main>)
}