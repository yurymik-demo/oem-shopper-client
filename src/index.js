import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

// import from an installed module rather than CDN
// to allow webpack package it with our application
// rather than have a blocking CSS download on the client side
import "materialize-css/dist/css/materialize.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
