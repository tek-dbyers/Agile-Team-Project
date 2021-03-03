import React from 'react';
import Product from './Product';

function AddToCartButton(props) {

  const item = props.entry.object;
  const quantity = props.entry.quantity;

  function addToCart() {

  }
  if (quantity == 0) {
    return (
      <p>Out of stock</p>
    )
  }
  return (
    <button onClick={addToCart}>
      Add to Cart
    </button>
  )



}

export default AddToCartButton;