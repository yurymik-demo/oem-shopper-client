import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeRoute from "../../routes/home/home";
import ItemDetailView from "../../routes/itemDetailView/itemDetailView";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grey lighten-5">
          <Header />
          <div className="container ">
            <Route exact path="/" component={HomeRoute} />
            <Route exact path="/items/:id" component={ItemDetailView} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
