import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import ItemRating from "../ItemRating/ItemRating";
import { addToCart } from "../../actions/cart";

import "./ItemDetailCard.scss";

export class ItemDetailCard extends React.Component {
  componentDidMount() {
    this.addToCartOnClick = () => {
      this.props.addToCart(this.props.item, 1);
      this.props.history.push("/cart");
    };
  }

  render() {
    const { item } = this.props;
    if (!item) return <ProgressIndicator />;

    const {
      title,
      description,
      features,
      longDescription,
      price,
      rating
    } = item;

    return (
      <div className="row item-details-container">
        <div className="col">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h2 className="card-title item-details-title">{title}</h2>
              <h4>{description}</h4>
              <h5>Features:</h5>
              <p>{features}</p>
              <h5>Details:</h5>
              <p>{longDescription}</p>
            </div>
            <div className="card-action">
              <ItemRating className="left" rating={rating} />
              <button
                className="aves-effect waves-light btn btn-small orange right"
                onClick={this.addToCartOnClick}
              >
                Add To Cart
              </button>
              <div className="price right orange-text">{price}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(withRouter(ItemDetailCard));
