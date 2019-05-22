// Dependencies
import React, { Component } from "react";

// Components
import Header from "../Header";
import Footer from "../Footer";

// Styles
import "./style.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator__box__container">
          <div className="calculator__box">
            <input
              className="calculator__box__input"
              type="text"
              placeholder="EUR"
            />
            <input
              className="calculator__box__input"
              type="text"
              placeholder="USD"
            />
          </div>
        </div>
        <div className="calculator__button">Calculate</div>
      </div>
    );
  }
}
