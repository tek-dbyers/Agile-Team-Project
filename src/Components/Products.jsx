import react from 'react';
import data from '../data.json';
import Product from './Product';

function Products() {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title></title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap" rel="stylesheet" />
        <script defer src="index.js"></script>
      </head>
      <body>
        <header>
          <h1 id="desert">Desert Ray Store</h1>
          <nav className="nav-bar">
              <a>Home</a>
              <a>Shop</a>
              <a>Cart Page</a>
          </nav>
        </header>
        <main>

          <section>
            <h1 className="furniture-gallery-header">Furniture Gallery</h1>


            {data.map((entry, i) => <Product key= {i} entry= {entry} />)}


          </section>

          <div id="coming-soon"><p>Products coming soon</p></div>

        </main>
        <script src="" async defer></script>
      </body>
      <footer></footer>
    </>
  )
}

export default Products;