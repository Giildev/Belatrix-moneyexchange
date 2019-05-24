import React, { Component } from "react";

export default class MenuItem extends Component {
  render() {
    return (
      <a href={this.props.href} className="header__nav__item">
        {this.props.text}
      </a>
    );
  }
}
