import { CartContext } from "./CartContext";
import { useState } from "react";

const CartState = (props) => {
  const itemInitial = [];
  const priceAmount = [];
  const productDetail = {};

  const initialToken = localStorage.getItem("auth_token");
  const [token, setToken] = useState(initialToken);
  const [item, setItem] = useState(itemInitial);
  const [price, setprice] = useState(priceAmount);
  const [productDetails, setproductDetails] = useState(productDetail);
  const [email, setemail] = useState("");

  const addItem = async (items) => {
    const newEmail = email.split("@");
    const splitEmail =
      newEmail[0] + newEmail[1].split(".")[0] + newEmail[1].split(".")[1];
    console.log(splitEmail);
    const findIndex = item.findIndex((itm) => itm.id === items.id);
    const findItem = item[findIndex];
    if (findItem) {
      const updatedPrice = findItem.price + items.price;
      const updatedQuantity = findItem.quantity + items.quantity;
      item[findIndex].price = updatedPrice;
      item[findIndex].quantity = updatedQuantity;

      const removedArr = item.filter((itm) => itm != items.id);
      // removedArr.push(newObj)
      // console.log( removedArr)
     
      console.log(removedArr)

      await fetch(
        `https://crudcrud.com/api/b9fe1f4630584350b95476ca51713d48/cart${splitEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({items:removedArr}),
        }
      );
      setItem(removedArr);
      // console.log(data)
      // setItem(data)
    }

    // item[findIndex].price=item[findIndex].price+items.price
    else {
      // const removedArr=item.concat(items)
      // const response= await fetch(`https://e-commerce-a4796-default-rtdb.firebaseio.com/cart.json`,{
      //     method: 'POST',
      //     body:JSON.stringify(removedArr),
      //     headers:{
      //       'Content-Type': 'application/json',
      //     }
      // })
      // const data=await response.json()
      // console.log(data)
      const removeItem = item.concat(items);
     
      await fetch(
        `https://crudcrud.com/api/b9fe1f4630584350b95476ca51713d48/cart${splitEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({items:removeItem}),
        }
      );
      setItem(item.concat(items));
      // console.log(data)
      // setItem(data)
    }
  };

  const addPrice = (pri) => {
    setprice(price.concat(pri));
  };

  const removeItem = async(id) => {
    const i = id;
    console.log(i);
    const filterArr = item.filter((items) => items.id !== i);
    const newEmail = email.split("@");
    const splitEmail =
      newEmail[0] + newEmail[1].split(".")[0] + newEmail[1].split(".")[1];
   
    await fetch(
      `https://crudcrud.com/api/b9fe1f4630584350b95476ca51713d48/cart${splitEmail}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({items:filterArr}),
      }
    );
    setItem(filterArr);
  };

  const addProductDetail = (product) => {
    // console.log(product)
    setproductDetails(product);
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("auth_token", token);
  };

  const addEmail = (email) => {
    setemail(email);
  };

  return (
    <CartContext.Provider
      value={{
        item,
        addItem,
        addPrice,
        price,
        removeItem,
        addProductDetail,
        productDetails,
        loginHandler,
        token,
        addEmail,
        email,
        setItem
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
