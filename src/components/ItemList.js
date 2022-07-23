import React, { useEffect, useState } from "react";
import Item from "./Item";
//import data from "../products.json";
import Loader from "../media/Loader";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ItemList() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // todos los productos
  /*
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    getDocs(queryCollection)
    .then(res => {
      setProductsList(res.docs.map(prod => (
        {id: prod.id, ...prod.data()}
      )))
    }).catch(err => console.log(err))
    .finally(setLoading(false))
  }, [])
  */

  // productos filtrados
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    const filteredQueryCollection = id ? query(queryCollection, where('category', '==', id)) : queryCollection;
    
    getDocs(filteredQueryCollection)
    .then(res => {
      setProductsList(res.docs.map(prod => (
        {id: prod.id, ...prod.data()}
      )))
    }).catch(err => console.log(err))
    .finally(setLoading(false))    
  }, [id])

  /*
  // detalle
  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, 'products', 'grass-starter')
    getDoc(queryProduct)
    .then(res => setProduct({id: res.id, ...res.data()}))
  }, [])*/


  return (
    <>
      {loading ? (
        <Loader className="loader"/>
      ) : (
        <ul className="item-list">
          {productsList.map((p) => (
            <Link to={`/item/${p.id}`} key={p.id}>
              <Item name={p.name} price={p.price} img={p.img} key={p.id} />
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
