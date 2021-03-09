import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  function getProducts() {

    return document.getElementsByClassName('product');
  }

  let products = getProducts();

  if (products.length > 0) {
    document.getElementById('coming-soon').style.display = "none";
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
