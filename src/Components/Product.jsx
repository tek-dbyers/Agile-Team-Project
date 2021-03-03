import React from 'react';
import { Link } from 'react-router-dom';


function Product(props) {

    const item = props.entry.object;

    return (
        <Link to="" className = "item-preview product" >
            <img src= {item.image_paths[0]} className= "item-image" />
            <section className= "preview-information">
                <h1>{item.manufacturer} {item.name}</h1>
                <p>Product description goes here...</p>
            </section>
        </Link>
    )
}

export default Product;
