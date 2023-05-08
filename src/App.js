import { useContext, useState } from "react";
import "./App.css";
import Cart from "./component/Cart";

import Navbar from "./component/Navbar";

import { CartContext } from "./store/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import CartState from "./store/CartState";
import Store from "./pages/Store";
import Home from "./pages/Home";
import Content from "./component/Content";
import Item from "./component/Item";
import ContactUs from "./component/ContactUs";
import ProductPage from "./pages/ProductPage";

function App() {
  const ctx = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);
  const cartClick = () => {
    setShowCart(!showCart);
  };
  return (
    <CartState>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
         <BrowserRouter>
      <div className="App">
        

     
          <Navbar oncartClick={cartClick} />

          <Routes>
            <Route path="/about"  element={<About />} />
            <Route path="/store"  element={<Store />} />
            <Route path="/home" element ={<Home/>}/>
            <Route path="/contactus" element ={<ContactUs/>}/>
            <Route path="/store/:productid" element ={<ProductPage />}/>
          </Routes>

     
    
      </div>
      </BrowserRouter>
    </CartState>
  );
}

export default App;
