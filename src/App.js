import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="welcome, Camilo!"/>
    </div>
  );
}

export default App;
