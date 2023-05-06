import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const ctx = useContext(CartContext);

  return (
    // <Navbar bg='dark' expand="sm" variant='black'>
    <div className="navbar">
      <ul className="navbar-ul">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

     <div className="navbar-cartDiv">
     <Button variant="info" onClick={props.oncartClick}>
        Cart
      </Button>
      <span
        style={{
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          textAlign: "center",
        }}
        className="text-white bg-success p-1"
      >
        {ctx.item.length}
      </span>
     </div>
    </div>
  );
};

export default Navbar;
