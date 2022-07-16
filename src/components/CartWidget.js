import React from 'react';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '../media/SVGs'

export default function CartWidget() {
    return (
        <Link to="/cart">
            <button className="mycart-btn">
                <ShoppingCartIcon color="white"/>
                My cart
            </button>
        </Link>
    )
}