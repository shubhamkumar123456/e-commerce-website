import { CartContext } from "./CartContext";
import { useState } from "react";

const CartState=(props)=>{
    
    const itemInitial=[];
    const priceAmount=[];
    const [item, setItem] = useState(itemInitial);
    const [price, setprice] = useState(priceAmount);


    const addItem=(items)=>{
        const findIndex=item.findIndex((itm=>itm.id===items.id))
        const findItem=item[findIndex]
        if(findItem){
            const updatedPrice=findItem.price+items.price
            const updatedQuantity=findItem.quantity+items.quantity
            item[findIndex].price=updatedPrice
            item[findIndex].quantity=updatedQuantity
    
          
            const removedArr= item.filter((itm)=>itm!=items.id)
            // removedArr.push(newObj)
            // console.log( removedArr)
            setItem(removedArr)

        }

      
        // item[findIndex].price=item[findIndex].price+items.price
      
        else{
            setItem(item.concat(items))
        }
       

    }

    const addPrice=(pri)=>{
        setprice(price.concat(pri))
    }

    const removeItem=(items)=>{
        const i=items
        console.log(i)
       const filterArr=item.filter(items=>items.name!==i)
       setItem(filterArr)
    }

    const updateItem=(items,itmAdd)=>{
        const i=items
        console.log(i)
       const filterArr=item.filter(items=>items.name!==i)
       setItem(filterArr)

    }

return(
    <CartContext.Provider value={{item,addItem,addPrice,price,removeItem,updateItem}}>
        {props.children}
    </CartContext.Provider>
)

}

export default CartState;