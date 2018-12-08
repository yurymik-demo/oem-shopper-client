import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo">
            Logo
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/cart">
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
