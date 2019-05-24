import React, { Component } from "react";

export default class SocialIcon extends Component {
  render() {
    return (
      <a href={`${this.props.href}`}>
        <img
          src={`${this.props.src}`}
          alt={`${this.props.alt}`}
          className="footer__box__social__item"
        />
      </a>
    );
  }
}
