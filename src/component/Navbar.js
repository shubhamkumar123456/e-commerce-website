import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../store/CartContext";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const ctx = useContext(CartContext);
  // console.log("ctx email = ",ctx.email);
  // console.log(ctx.token)

  return (
    // <Navbar bg='dark' expand="sm" variant='black'>
    <div className="navbar">
      <ul className="navbar-ul">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/login"><Button>Login</Button></Link>
        </li>
        <li>
         <p>{ctx.email}</p>
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
        {ctx.item?ctx.item.length:"0"}
      </span>
     </div>
    </div>
  );
};

export default Navbar;
