import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "../../media/Loader";
import data from "../../products.json";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer() {
  //const [productId, setProductId] = useState("");
  const [product, setProduct] = useState();
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
        .then((res) => setProduct(res.products.find((prod) => prod.id === id)))
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    }, 2000);
  }, [id]);

  return (
    <main>
      {loading ? (
        <Loader className="loader" />
      ) : !product ? (
        <p style={{textAlign: "center"}}>oops! product not found</p>
      ) : (
        <>
          <h1
            style={{
              color: "#282828",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Item Detail: {product.name}
          </h1>
          <section className="item-detail">
            <ItemDetail
              name={product.name}
              price={product.price}
              description={product.description}
              img={product.img}
              id={product.id}
            />
          </section>
        </>
      )}
    </main>
  );
}
