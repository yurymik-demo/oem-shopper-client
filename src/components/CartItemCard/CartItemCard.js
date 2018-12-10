import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ItemRating from "../../components/ItemRating/ItemRating";

import "./CartItemCard.scss";

export class CartItemCard extends React.Component {
  render() {
    const { item, quantity } = this.props.cartItem;
    return (
      <div className="row cart-item-card">
        <div className="col s12 m12">
          <div className="card white ">
            <div className="card-content ">
              <span className="card-title">{item.title}</span>
              <div className="right">{item.price}</div>
              <p>{item.description}</p>
              <div className="right">QTY: {quantity}</div>
            </div>
            <div className="card-action">
              <ItemRating className="left" rating={item.rating} />
              <button className="waves-effect waves-light btn btn-small red right">
                X
              </button>
              <button className="waves-effect waves-light btn btn-small orange right">
                Update
              </button>
              <Link className="right" to={`/items/${item.id}`}>
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CartItemCard);
