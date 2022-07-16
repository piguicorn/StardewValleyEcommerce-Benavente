import React, { useContext } from 'react';
import { CartContext } from '../cartContext';

export default function ItemDetail({ name, img, price, description, id }) {
  const [, addItem] = useContext(CartContext);

  return (
    <>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>
        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/18px-Gold.png" alt="" />
        {price}g</p>
      <p>{description}</p>
      <button onClick={() => addItem({img, name, price, description, id})}>Add to cart</button>
    </>
  );
}