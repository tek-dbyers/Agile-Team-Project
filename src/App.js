import logo from './logo.svg';
import './App.css';
import './Components/Products';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Products />
    </div>
  );
}

export default App;
