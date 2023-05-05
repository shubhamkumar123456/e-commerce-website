
import { useState } from 'react';
import './App.css';
import Cart from './component/Cart';

import Content from './component/Content';
import Item from './component/Item';
import {Button, Navbar} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartState from './store/CartState';

function App() {

  const [showCart, setShowCart] = useState(false);
const cartClick=()=>{
  setShowCart(!showCart)
}
  return (
 <CartState className="App">
   
    {showCart && <Cart  showCart={showCart} setShowCart={setShowCart}/>}
<Navbar bg='dark' expand="sm" variant='black'>
<Container>
   
      
     
          <Nav className="me-auto text-white bg-dark">
            <Nav.Link href="#home" className='text-white bg-dark'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white bg-dark'>Store</Nav.Link>
            <Nav.Link href="#link" className='text-white bg-dark'>About</Nav.Link>
           
          </Nav>
          <Button  variant="info" onClick={cartClick}>Cart</Button>
          <span className='text-white bg-success'>0</span>
       
      </Container>
</Navbar>
      {/* <Navbar bg="dark" expand="sm" variant="dark"/> */}
      <Content/>
     <Item/>
 
 </CartState>
  );
}

export default App;
