import React, { Component } from "react";

export default class FooterContent extends Component {
  render() {
    return (
      <div className="footer__box">
        <div className="footer__box__title">{this.props.title}</div>
        <div className="footer__box__text">{this.props.text}</div>
      </div>
    );
  }
}
