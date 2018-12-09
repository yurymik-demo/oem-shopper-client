import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo pl-1">
            OEM Store
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
