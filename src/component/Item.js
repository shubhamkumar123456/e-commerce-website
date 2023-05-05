import React, { useContext } from "react";
import './Item.css'
import { Button } from "react-bootstrap";
import { CartContext } from "../store/CartContext";

const Item = () => {
const ctx=useContext(CartContext)

  const handleaddToCart=(id,title,img,price,quantity)=>{

    const obj={
      id,
      title,
      img,
      price,
      quantity
    }
   

    ctx.addItem(obj)

  }

  const productsArr = [
    {
      id:1,
      title: "Colors",
      price: 100,
      quantity:1,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:2,
      title: "Black and white Colors",
      price: 50,
      quantity:1,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:3,
      title: "Yellow and Black Colors",
      price: 70,
      quantity:1,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",
      price: 100,
      quantity:1,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return <div className="itemcomponent">
    {productsArr.map((product)=>{
        return <div className="itemProduct">
            <p>{product.title}</p>
            <img src={product.imageUrl}/>
            <div className="priceAndCartDiv">
            <p>${product.price}</p>
            <p>{product.quantity? product.quantity:1}</p>
            <Button variant="primary" onClick={()=>{handleaddToCart(product.id,product.title,product.imageUrl,product.price,product.quantity)}}>Add to cart</Button>
     
            </div>
      
        </div>
    })}
  </div>;
};

export default Item;
