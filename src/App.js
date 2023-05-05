
import { useContext, useState } from 'react';
import './App.css';
import Cart from './component/Cart';

import Content from './component/Content';
import Item from './component/Item';
import {Button, Navbar} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { CartContext } from './store/CartContext';

function App() {

  const ctx=useContext(CartContext)

  const [showCart, setShowCart] = useState(false);
const cartClick=()=>{
  setShowCart(!showCart)
}
  return (
 <div className="App">
   
    {showCart && <Cart  showCart={showCart} setShowCart={setShowCart}/>}
<Navbar bg='dark' expand="sm" variant='black'>
<Container>
   
      
     
          <Nav className="me-auto text-white bg-dark">
            <Nav.Link href="#home" className='text-white bg-dark'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white bg-dark'>Store</Nav.Link>
            <Nav.Link href="#link" className='text-white bg-dark'>About</Nav.Link>
           
          </Nav>
          <Button  variant="info" onClick={cartClick}>Cart</Button>
          <span style={{borderRadius:"50%", height:"30px",width:"30px",textAlign:"center"}} className='text-white bg-success p-1'>{ctx.item.length}</span>
       
      </Container>
</Navbar>
      {/* <Navbar bg="dark" expand="sm" variant="dark"/> */}
      <Content/>
     <Item/>
 
 </div>
  );
}

export default App;
