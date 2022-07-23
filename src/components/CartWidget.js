import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '../media/SVGs'
import { CartContext } from '../cartContext';

export default function CartWidget() {
    const [, , , , totalItems] = useContext(CartContext);

    return (
        <Link to="/cart">
            <button className="mycart-btn">
                <div className="total-items">
                    <ShoppingCartIcon color="white"/>
                    {totalItems > 0 ? <span>{totalItems}</span> : null}
                </div>
                My cart
            </button>
        </Link>
    )
}