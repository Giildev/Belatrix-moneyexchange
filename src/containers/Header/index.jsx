// Dependencies
import React, { Component } from "react";

// Components
import MenuItem from "../../components/MenuItem.js";

// Styles
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo" />
        <div className="header__nav">
          <MenuItem href="#Lorem" text="Lorem" />
          <MenuItem href="#Ipsum" text="Ipsum" />
          <MenuItem href="#Dolor" text="Dolor" />
          <MenuItem href="#Sit" text="Sit" />
        </div>
      </div>
    );
  }
}
