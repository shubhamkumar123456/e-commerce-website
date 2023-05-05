import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import './Cart.css'
import { CartContext } from "../store/CartContext";

const Cart = (props) => {

  const ctx=useContext(CartContext)
  const arrItems=ctx.item
  console.log(arrItems)
  
  let sum=0;

  return <div className="cartcomponent">
  <h2>Cart</h2>
  <div className="cartcomponent-names" >
    <p>Item</p>
    <p>Price</p>
    <p>Quantity</p>
  </div>
  <Button className="cartcomponentButtonClose" onClick={()=>{props.setShowCart(false)}}>X</Button>
    {arrItems.map((ele)=>{
        return(
            <div className="cartComponentElements">
            <img src={ele.img}/>
            <p>{ele.title}</p>
            <p>{ele.price}</p>
            <p>{ele.quantity? ele.quantity:1}</p>
            <Button variant="danger">Remove</Button>
            </div>
        )
    })}
    {arrItems.forEach(element => {
      sum+=element.price
    })}
     <p>Total Price ${sum}</p>
     <Button>PURCHASE</Button>
  </div>;
};

export default Cart;
