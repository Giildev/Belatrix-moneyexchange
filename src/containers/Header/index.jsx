// Dependencies
import React, { Component } from "react";

// Components

// Styles
import "./style.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="header__logo" />
        <div className="header__nav">
          <a href="#" className="header__nav__item">
            Lorem
          </a>
          <a href="#" className="header__nav__item">
            Ipsum
          </a>
          <a href="#" className="header__nav__item">
            Dolor
          </a>
          <a href="#" className="header__nav__item">
            Sit
          </a>
        </div>
      </div>
    );
  }
}
