import React from "react";
import { connect } from "react-redux";
import ItemDetailCard from "../../components/ItemDetailCard/ItemDetailCard";
import { getItemDetails, clearItemSelection } from "../../actions/items";
import ScrollToTopOnMount from "../../components/ ScrollToTopOnMount/ScrollToTopOnMount";

export class ItemDetailView extends React.Component {
  componentDidMount() {
    this.props.getItemDetails(this.props.itemId);
  }

  componentWillUnmount() {
    this.props.clearItemSelection();
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <ScrollToTopOnMount />
        <h1>Item Details: </h1>
        <ItemDetailCard item={item} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: state.itemDetail,
  itemId: props.match.params.id
});

export default connect(
  mapStateToProps,
  { getItemDetails, clearItemSelection }
)(ItemDetailView);
