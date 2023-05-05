
import './App.css';

import Content from './component/Content';
import Item from './component/Item';
import {Button, Navbar} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
<Navbar bg='dark' expand="sm" variant='black'>
<Container>
   
      
       
          <Nav className="me-auto text-white bg-dark">
            <Nav.Link href="#home" className='text-white bg-dark'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white bg-dark'>Store</Nav.Link>
            <Nav.Link href="#link" className='text-white bg-dark'>About</Nav.Link>
           
          </Nav>
          <Button variant="info">Cart</Button>{' '}
       
      </Container>
</Navbar>
      {/* <Navbar bg="dark" expand="sm" variant="dark"/> */}
      <Content/>
     <Item/>
    </div>
  );
}

export default App;
