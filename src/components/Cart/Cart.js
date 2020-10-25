import React from 'react';
import './Cart.css';
const Cart = (props) => {
    let cart = props.cart;
  let Total = cart.reduce((Total, prd) => Total + prd.price, 0);
 
  //Function to format number
  function numFormat(num) {
    let precision = num.toFixed(2);
    return Number(precision);
  }
    return (
      
      <div  className="cart-container">
      <div className="cart ">
        < h1>
          Order Summery
       </h1>
  <h3>Course Ordered: {cart.length}</h3>

  <h3> Total Price: ${numFormat(Total)}</h3>
  

  <br/>
  <button   type="button"  className="button">
  
    Buy now {" "}
    
    <span className="badge badge-light">$ {numFormat(Total)}</span>
  </button>
    </div>
   </div>
    );
};

export default Cart;