import {
  GET_ITEMS,
  GET_ITEM_DETAILS,
  CLEAR_SELECTED_ITEM
} from "./types.const";

const _MOCK_ITEM_FEATURES =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod finibus luctus. Mauris iaculis dolor eget ante tempor, at elementum justo molestie. Quisque sit amet mattis dolor, non mollis lacus. Proin vulputate, velit vitae hendrerit euismod, lacus diam fermentum neque, ut tempus est odio a diam. Donec id enim ac tellus auctor ultrices. Nullam viverra dui diam, blandit tempus libero mattis vitae. Sed sit amet tincidunt sem, sed pharetra massa. Praesent pharetra, augue id euismod suscipit, velit odio pulvinar nibh, vitae interdum diam purus eu felis. Donec gravida leo quis risus vehicula, quis sollicitudin velit facilisis.";

const _MOCK_ITEM_LONG_DESCRIPTION =
  "Etiam arcu lacus, blandit in turpis non, consectetur euismod libero. Maecenas convallis turpis quis dignissim pulvinar. Aliquam ut aliquam libero, sed rhoncus libero. Praesent dapibus, purus a ornare vulputate, sapien orci iaculis justo, ut placerat ipsum sapien ac lacus. Curabitur pharetra augue et tellus tincidunt, sed mattis lacus consectetur. Duis venenatis ornare urna, ac tristique turpis commodo sit amet. Quisque ut ante nulla. Integer rhoncus eros in dolor vulputate, ut consequat lorem eleifend. Nunc sed dapibus mi. Quisque eget ligula et enim consequat aliquam.";

const generateMockItem = (id, title, description, price, rating) => {
  return {
    id,
    title,
    description,
    price,
    rating,
    features: _MOCK_ITEM_FEATURES,
    longDescription: _MOCK_ITEM_LONG_DESCRIPTION
  };
};
const _MOCK_ITEMS = [
  generateMockItem("1", "Cannon Camera", "The Best Camera", "550", 1),
  generateMockItem("2", "Oakley Sunglasses", "The Best Sunglasses", "125", 2),
  generateMockItem("3", "Thule Backpack", "The Best Backpack", "35", 3),
  generateMockItem("4", "Dyson Fan", "The Best Fan", "350", 4),
  generateMockItem("5", "Bose Headphones", "The Best Headphones", "155", 5)
];

export const getItems = () => dispatch => {
  dispatch({ type: GET_ITEMS, items: _MOCK_ITEMS });
};

export const getItemDetails = id => dispatch => {
  const item = _MOCK_ITEMS.find(item => item.id === id);

  // adding timeout to simulate the api call and to demonstrate "waiting" experience
  setTimeout(() => dispatch({ type: GET_ITEM_DETAILS, item }), 1000);
};

export const clearItemSelection = () => dispatch => {
  dispatch({ type: CLEAR_SELECTED_ITEM });
};
