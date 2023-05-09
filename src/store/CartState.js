import { CartContext } from "./CartContext";
import { useState } from "react";

const CartState=(props)=>{
    
    const itemInitial=[];
    const priceAmount=[];
    const productDetail={};
    
 
    const initialToken=localStorage.getItem('auth_token')
    const [token,setToken]=useState(initialToken)
    const [item, setItem] = useState(itemInitial);
    const [price, setprice] = useState(priceAmount);
    const [productDetails, setproductDetails] = useState(productDetail);
    const [email, setemail] = useState("");
    


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

    const addProductDetail=(product)=>{
        // console.log(product)
        setproductDetails(product)
    }

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('auth_token',token);
     
    }

    const addEmail=(email)=>{
        setemail(email)
    }

return(
    <CartContext.Provider value={{item,addItem,addPrice,price,removeItem,updateItem,addProductDetail,productDetails,loginHandler,token,addEmail,email}}>
        {props.children}
    </CartContext.Provider>
)

}

export default CartState;