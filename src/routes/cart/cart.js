import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";
import { getUserCart } from "../../actions/cart";
import CartItemCard from "../../components/CartItemCard/CartItemCard";

import "./cart.scss";

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getUserCart();
  }

  renderNoItemsView = () => {
    return <h4>Your Cart is empty.</h4>;
  };

  renderCartItems = items => {
    if (!items) return <ProgressIndicator />;
    if (!items.length) return this.renderNoItemsView();
    return items.map(cartItem => {
      return (
        <div key={cartItem.id}>
          <CartItemCard key={cartItem.id} cartItem={cartItem} />
        </div>
      );
    });
  };

  render() {
    const { cartItems: items } = this.props.userCart || {};
    const canCheckout = items && items.length > 0;
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        {this.renderCartItems(items)}
        <div className="row">
          {canCheckout && (
            <Link
              to="/checkout"
              className="action-button btn-flat orange right"
            >
              Checkout
            </Link>
          )}
          <Link to="/" className="action-button btn-flat orange right">
            Continue Chopping
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userCart }) => ({
  userCart
});

export default connect(
  mapStateToProps,
  { getUserCart }
)(Cart);
