import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  function getProducts() {

    return [];

  }
  let products = getProducts();
  let comingSoon = document.querySelector('#coming-soon');
  if (products === []) {

  }

  /*
  function myFunction() {
      document.getElementsByClassName("button").innerHTML = "Item added to cart";
  }
  */

  return (
    <div className="App">
      <Router>
      <Products />
      </Router>
    </div>
  );
}

export default App;
