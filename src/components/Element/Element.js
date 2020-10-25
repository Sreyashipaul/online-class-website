import React from 'react';
import courseData from "../../courseData/courseData";
import  { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Element.css";


const Element = () => {
    let [product, setProduct] = useState(courseData); //For courses
  let [cart, setCart] = useState([]);
  //function to handle enroll button
  let handleButton = (pdt) => {
    let newCart = [...cart, pdt];
    setCart(newCart);
  };
    return (
        <div>
            <div className="element-container">
        <div className="product-container">
          {product.map((singleCourse) => (
            <Product
              courseDetails={singleCourse}
              handleButton={handleButton}
              key={singleCourse.id}
            ></Product>
          ))}
        </div>
        <div className="cart-container col-md-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>
        </div>
    );
};

export default Element;