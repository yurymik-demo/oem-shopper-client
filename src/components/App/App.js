import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeRoute from "../../routes/home/home";
import ItemDetailViewRoute from "../../routes/itemDetailView/itemDetailView";
import CartRoute from "../../routes/cart/cart";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grey lighten-5">
          <Header />
          <div className="container app-container">
            <Route exact path="/" component={HomeRoute} />
            <Route exact path="/items/:id" component={ItemDetailViewRoute} />
            <Route exact path="/cart" component={CartRoute} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
