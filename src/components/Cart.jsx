import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../cartContext';

export default function Cart() {
    const [items, , removeItem, clearCart, , totalPrice] = useContext(CartContext);

    return (<main>
        <h1 style={{
            color: "#282828",
            fontWeight: 500,
            textAlign: "center"
        }}>Items in Cart:</h1>
        { items.length > 0 ?
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>                        
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((entry, index) =>
                            <tr key={index}>
                                <td>{entry.item.name}</td>
                                <td>{entry.item.description}</td>
                                <td>{entry.quantity}</td>
                                <td>{entry.item.price}</td>
                                
                                <td style={{border: "none"}} bgcolor="#f2f2f2"><button onClick={() => removeItem(entry.item.id)}>Remove</button></td>
                            </tr>)
                    }
                    <tr>
                        <td colspan={3} style={{textAlign: "right", fontWeight: "bold"}}>Total:</td>
                        <td style={{fontWeight: "bold"}}>{totalPrice}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
        </div> :
        <p style={{textAlign: "center"}}>You haven't added items yet. <Link to="/" style={{textDecoration: "underline"}}>Go back to Home</Link>.</p>
        
            }
    </main>)
}