import react from 'react';

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
          <nav>
            <ul>
              <li>Cart Page</li>
            </ul>
          </nav>
        </header>
        <main>

          <section>Product: Gallery

                <article class="product">
              <h3>Product Name</h3>
              <div><a></a></div>
              <img src=""></img>
              <p>product Price: $100</p>
              <p>Description: </p>
              <button class="button" onclick="myFunction()">add to cart.</button>
            </article>
            <article class="product">
              <h3>Product Name</h3>
              <div><a></a></div>
              <img src=""></img>
              <p>product Price: $100</p>
              <p>Description: </p>
              <button class="button" onclick="myFunction()">add to cart.</button>
            </article>
            <article class="product">
              <h3>Product Name</h3>
              <div><a></a></div>
              <img src=""></img>
              <p>product Price: $100</p>
              <p>Description: </p>
              <button class="button" onclick="myFunction()">add to cart.</button>
            </article>


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