import React from "react";
import { Link } from "react-router-dom";
import "./stylesNav.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className="container">
      <ul className="listaNav">
          <li>
          <Link to="/category/books"className="list">Books</Link>
        </li>
        <li>
          <Link to="/category/industrial" className="list">Industrial</Link>
        </li> 
      <li>
          <Link to="/category/games"className="list">Games</Link>
        </li>
        <li>
          <Link to="/category/beauty" className="list">Beauty</Link>
        </li>
        <li>
          <Link to="/category/electronics"className="list">Electronics</Link>
        </li>
       

      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
