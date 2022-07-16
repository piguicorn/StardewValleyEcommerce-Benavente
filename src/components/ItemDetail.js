import React, { useContext, useState } from 'react';
import { CartContext } from '../cartContext';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";

export default function ItemDetail({ name, img, price, description, id }) {
  const [, addItem] = useContext(CartContext);
  const [quantity, setQuantity] = useState();

  const addItemToCart = (q) => {
    setQuantity(q)
    addItem({img, name, price, description, id}, q)
  }

  return (
    <>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>
        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/18px-Gold.png" alt="" />
        {price}g</p>
      <p>{description}</p>
      {
        quantity ?
        <Link to="/cart" style={{textDecoration: "underline"}}>Terminar Compra</Link> :
        <ItemCount stock={7} initial={1} onAdd={addItemToCart}/>}
    </>
  );
}

// <button onClick={() => addItem({img, name, price, description, id})}>Add to cart</button>