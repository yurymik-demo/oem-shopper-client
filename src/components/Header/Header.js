import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { updateCartTotals } from "../../actions/cart";

import "./Header.scss";

export class Header extends React.Component {
  componentDidMount() {
    if (this.props.updateCartTotals) {
      this.props.updateCartTotals();
    }
  }

  render() {
    return (
      <header className="header-container">
        <nav>
          <div className="nav-wrapper teal row">
            <Link to="/" className="brand-logo pl-1 col s3">
              <i className="material-icons">shopping_basket</i>
              OEM Store
            </Link>
            <div className="col s9 right">
              <ul id="nav-mobile">
                <li className="left">
                  <Link to="/">All Items</Link>
                </li>
                <li className="right">
                  <Link to="/cart">
                    <i className="material-icons left shopping-cart-icon">
                      shopping_cart
                    </i>
                    {JSON.stringify(this.props.cartItemsCount)}
                  </Link>
                </li>
                <li className="right">
                  <Link to="/login">Login with Google</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cartItemsCount: get(state, "userCart.totals.itemsCount", 0)
});

export default connect(
  mapStateToProps,
  { updateCartTotals }
)(Header);
