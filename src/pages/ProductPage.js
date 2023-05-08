import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../store/CartContext';


const ProductPage = () => {
    const param=useParams();
console.log(param.productid)

const ctx= useContext(CartContext);
   const {productDetails}=ctx;
   console.log(productDetails)
  return (
    <div>
      <h1>{productDetails.title}</h1>
     <img src={productDetails.imageUrl}></img>

     {productDetails.id==param.productid &&<div>
        <p>Reviews</p>
        <span>5 Star</span>
        </div>}
    </div>

  )
}

export default ProductPage
