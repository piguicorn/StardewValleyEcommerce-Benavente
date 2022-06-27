import { useEffect, useState } from "react";
import Item from "./Item";
import products from "../../products.json";
import Loader from "../../media/Loader";

export default function ItemList() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const promise = new Promise((res, rej) => {
    const condition = true;
    if (condition) {
      res(products);
    } else {
      rej("error");
    }
  });

  useEffect(() => {
    setTimeout(() => {
      promise
        .then((data) => setProductsList(data.general))
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    }, 2000);
  });

  return (
    <>
      {loading ? (
        <Loader className="loader"/>
      ) : (
        <ul className="item-list">
          {productsList.map((p) => (
            <Item name={p.name} price={p.price} img={p.img} key={p.id} />
          ))}
        </ul>
      )}
    </>
  );

  /*
  return (
    <ul className="item-list">
      {loading ? (
        <Loader />
      ) : (
        productsList.map((p) => (
          <Item name={p.name} price={p.price} img={p.img} key={p.id} />
        ))
      )}
    </ul>
  );*/
}
