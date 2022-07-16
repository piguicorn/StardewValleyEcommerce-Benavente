import React, { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)

    const substract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className="counter">
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 10}}>
                <button onClick={substract}>-</button>
                <p>{count}</p>
                <button onClick={add}>+</button>
            </div>

            <button disabled={count === 0} onClick={() => onAdd(count)}>Add to cart</button>
        </div>
    )
}