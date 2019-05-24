// Dependencies
import React, { Component } from "react";

// Components
import SocialIcon from "../../components/SocialIcon.js";
import FooterContent from "../../components/FooterContent.js";

// Styles
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FooterContent
          title="Lorem"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quisquam molestiae et aspernatur earum dolorem! Nemo saepe
            inventore repudiandae eum totam eius"
        />
        <FooterContent
          title="Ipsum"
          text="Molestiae et aspernatur earum dolorem! Nemo saepe inventore
            repudiandae eum totam eius, at reprehenderit ipsum, impedit
            vitae necessitatibus quos architecto fugiat?"
        />
        <FooterContent
          title="Dolor"
          text="Impedit vitae necessitatibus quos architecto fugiat?"
        />

        <div className="footer__box">
          <div className="footer__box__title">Social Networks</div>
          <div className="footer__box__social">
            <SocialIcon
              href="#facebook"
              src="/facebook.svg"
              alt="/facebook.svg"
            />
            <SocialIcon href="#twitter" src="/twitter.svg" alt="/twitter.svg" />
            <SocialIcon
              href="#linkedin"
              src="/linkedin.svg"
              alt="/linkedin.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}
