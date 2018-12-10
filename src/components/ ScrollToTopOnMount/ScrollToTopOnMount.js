import React from "react";

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default ScrollToTopOnMount;
