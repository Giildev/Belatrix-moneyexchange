// Dependencies
import React, { Component } from "react";

// Components

// Styles
import "./style.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__box">
          <div className="footer__box__title">Lorem</div>
          <div className="footer__box__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            molestiae et aspernatur earum dolorem! Nemo saepe inventore
            repudiandae eum totam eius, at reprehenderit ipsum, impedit vitae
            necessitatibus quos architecto fugiat?
          </div>
        </div>
        <div className="footer__box">
          <div className="footer__box__title">Lorem</div>
          <div className="footer__box__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            molestiae et aspernatur earum dolorem! Nemo saepe inventore
            repudiandae eum totam eius, at reprehenderit ipsum, impedit vitae
            necessitatibus quos architecto fugiat?
          </div>
        </div>
        <div className="footer__box">
          <div className="footer__box__title">Lorem</div>
          <div className="footer__box__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            molestiae et aspernatur earum dolorem! Nemo saepe inventore
            repudiandae eum totam eius, at reprehenderit ipsum, impedit vitae
            necessitatibus quos architecto fugiat?
          </div>
        </div>
        <div className="footer__box">
          <div className="footer__box__title">Lorem</div>
          <div className="footer__box__social">
            <div className="footer__box__social__item" />
            <div className="footer__box__social__item" />
            <div className="footer__box__social__item" />
          </div>
        </div>
      </div>
    );
  }
}
