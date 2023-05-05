import { CartContext } from "./CartContext";
import { useState } from "react";

const CartState=(props)=>{
    
    const itemInitial=[];
    const priceAmount=[];
    const [item, setItem] = useState(itemInitial);
    const [price, setprice] = useState(priceAmount);


    const addItem=(items)=>{
        setItem(item.concat(items))
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