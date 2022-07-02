import NavBar from "./components/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index path="/" element={<ItemListContainer />} />
        <Route index path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/*" element={<p style={{textAlign: "center"}}>oops! we couldn't find that</p>}/>
      </Routes>
    </div>
  );
}

export default App;
