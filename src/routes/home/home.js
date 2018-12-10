import React from "react";
import ItemsList from "../../components/ItemsList/ItemsList";
import ScrollToTopOnMount from "../../components/ ScrollToTopOnMount/ScrollToTopOnMount";

const Home = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <h1>Best Deals</h1>
      <ItemsList />
    </div>
  );
};

export default Home;
