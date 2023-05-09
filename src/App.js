import { useContext, useState } from "react";

import "./App.css";
import Cart from "./component/Cart";

import Navbar from "./component/Navbar";

import { CartContext } from "./store/CartContext";
import { BrowserRouter, Route, Routes ,Navigate  } from "react-router-dom";
import About from "./pages/About";
import CartState from "./store/CartState";
import Store from "./pages/Store";
import Home from "./pages/Home";
import Content from "./component/Content";
import Item from "./component/Item";
import ContactUs from "./component/ContactUs";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";

function App() {
  const ctx = useContext(CartContext);


  const [showCart, setShowCart] = useState(false);
  const cartClick = () => {
    setShowCart(!showCart);
  };
  return (
    <>

      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
         <BrowserRouter>
      <div className="App">
        

     
          <Navbar oncartClick={cartClick} />

          <Routes>
         
            <Route path="/about"  element={<About />} />
            {ctx.email && <Route path="/store"  element={<Store />} />}
            {!ctx.email &&  <Route path="/store" element={ <Navigate to="/login" /> } />}
          
         <Route path="/" element ={<Home/>}/>
    
            <Route path="/contactus" element ={<ContactUs/>}/>
            <Route path="/store/:productid" element ={<ProductPage />}/>
           {!ctx.email && <Route path="/login" element ={<Login />}/>}
          </Routes>

     
    
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
