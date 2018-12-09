import React from "react";
import { connect } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import { getItems } from "../../actions/items";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";

export class ItemsList extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props;
    if (!items) return <ProgressIndicator />;
    if (!items.length) return <h3>No Items Found ¯\_(ツ)_/¯</h3>;

    return (
      <div className="items-list-container">
        {items.map(item => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items });

export default connect(
  mapStateToProps,
  { getItems }
)(ItemsList);
