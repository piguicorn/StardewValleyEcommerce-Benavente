import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../cartContext';
import ItemCount from './ItemCount';
import { Link, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loader from "../media/Loader";

export default function ItemDetail() {
  const [, addItem] = useContext(CartContext);
  const [quantity, setQuantity] = useState();
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, 'products', id)
    getDoc(queryProduct)
      .then(res => setProduct(res.data()))
      .catch(err => console.log(err))
  }, [id])

  const addItemToCart = (q) => {
    setQuantity(q)
    addItem({ img: product.img, name: product.name, price: product.price, description: product.description, id }, q)
  }

  return (
    <>
      {product ? (
        <>
          <img src={product.img} alt="" />
          <h2>{product.name}</h2>
          <p>
            <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/18px-Gold.png" alt="" />
            {product.price}g</p>
          <p>{product.description}</p>
          {
            quantity ?
              <Link to="/cart" style={{ textDecoration: "underline" }}>Terminar Compra</Link> :
              <ItemCount stock={7} initial={1} onAdd={addItemToCart} />
          }
        </>

      ) : (
        <Loader className="loader" />
      )}
    </>
  );
}
