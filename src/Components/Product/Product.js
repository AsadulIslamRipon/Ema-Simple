import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import "./Product.css";

const Product = ({ handleAddToCart, product }) => {
  const { name, img, seller, ratings, price } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-seller">Manufacturer :{seller}</p>
        <p className="product-ratings">Rating : {ratings} stars</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
