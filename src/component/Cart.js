import React from "react";
import { Button } from "react-bootstrap";
import './Cart.css'

const Cart = (props) => {
  const cartElements = [
    {
        id:5,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
        id:6,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
        id:7,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  return <div className="cartcomponent">
  <h2>Cart</h2>
  <div className="cartcomponent-names" >
    <p>Item</p>
    <p>Price</p>
    <p>Quantity</p>
  </div>
  <Button className="cartcomponentButtonClose" onClick={()=>{props.setShowCart(false)}}>X</Button>
    {cartElements.map((ele)=>{
        return(
            <div className="cartComponentElements">
            <img src={ele.imageUrl}/>
            <p>{ele.title}</p>
            <p>{ele.price}</p>
            <p>{ele.quantity}</p>
            <Button variant="danger">Remove</Button>
            </div>
        )
    })}
     <p>Total Price $100</p>
     <Button>PURCHASE</Button>
  </div>;
};

export default Cart;
