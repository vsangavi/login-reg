import React from "react";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="unlist">
        <label>RowyStore</label>
        <li className="list">
          <i className="fas fa-home"></i>
          <a href="/">Home</a>
        </li>
        <li className="list">
          <i className="fab fa-opencart"></i>
          <a href="/">Cart</a>
        </li>
        <li className="list">
          <i className="fas fa-hand-holding-heart"></i>
          <a href="/">Wishlist</a>
        </li>
        <li className="list">
          <a href="/">Logout</a>
        </li>
      </div>
    </nav>
  );
};

export default Nav;
