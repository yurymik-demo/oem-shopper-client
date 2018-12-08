import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Header/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/">
            <h1>We are working very hard, stay tuned :)</h1>
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
