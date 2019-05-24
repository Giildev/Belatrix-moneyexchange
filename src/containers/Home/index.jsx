// Dependencies
import React, { Component } from "react";

// Components
import Header from "../Header/";
import Calculator from "../Calculator/";
import Footer from "../Footer/";

// Styles
import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <Calculator />
        <Footer />
      </div>
    );
  }
}
