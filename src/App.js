import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./cartContext";
/* components */
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import Cart from "./components/Cart";

function App() {

  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer />} />
          <Route index path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/*" element={<p style={{ textAlign: "center" }}>oops! we couldn't find that</p>} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
