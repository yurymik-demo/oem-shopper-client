import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ItemRating from "../../components/ItemRating/ItemRating";
import { removeItemFromCart } from "../../actions/cart";

import "./CartItemCard.scss";

export class CartItemCard extends React.Component {
  onRemoveClick = () => {
    this.props.removeItemFromCart(this.props.cartItem.id);
  };

  onTitleClick = () => {
    this.props.history.push(`/items/${this.props.cartItem.id}`);
  };

  render() {
    const { item, quantity } = this.props.cartItem;
    return (
      <div className="row cart-item-card">
        <div className="col s12 m12">
          <div className="card white ">
            <div className="card-content ">
              <div onClick={this.onTitleClick}>
                <div className="card-title">{item.title}</div>
                <div className="right">${item.price}</div>
                <p>{item.description}</p>
              </div>
              <div className="right">QTY: {quantity}</div>
            </div>
            <div className="card-action">
              <ItemRating className="left" rating={item.rating} />
              <button
                className="waves-effect waves-light btn btn-small red right"
                onClick={this.onRemoveClick}
              >
                X
              </button>
              <button className="waves-effect waves-light btn btn-small orange right">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { removeItemFromCart }
)(withRouter(CartItemCard));
