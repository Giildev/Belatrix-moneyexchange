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
            <div className="calculator__box--container">
              <i class="fas fa-euro-sign icon" />
              <input
                className="calculator__box__input"
                type="number"
                placeholder="EUR"
              />
            </div>
            <div className="calculator__box--container">
              <i class="fas fa-dollar-sign icon" />
              <input
                className="calculator__box__input"
                type="number"
                placeholder="USD"
              />
            </div>
          </div>
        </div>
        <div className="calculator__button">Calculate</div>
      </div>
    );
  }
}
