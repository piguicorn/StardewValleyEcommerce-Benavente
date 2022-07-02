import { useEffect, useState } from "react";
import Item from "./Item";
import data from "../products.json";
import Loader from "../media/Loader";
import { useParams, Link } from "react-router-dom";

export default function ItemList() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const promise = new Promise((res, rej) => {
    const condition = true;
    if (condition) {
      res(data);
    } else {
      rej("error");
    }
  });

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      promise
        .then((res) => {
          id ?
          setProductsList(res.products.filter(prod => prod.category.toLowerCase() === id)) :
          setProductsList(res.products)
        })
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    }, 2000);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader className="loader"/>
      ) : (
        <ul className="item-list">
          {productsList.map((p) => (
            <Link to={`/item/${p.id}`}>
              <Item name={p.name} price={p.price} img={p.img} key={p.id} />
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
