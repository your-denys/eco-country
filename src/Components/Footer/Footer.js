import React from "react";
import "./Footer.scss";
import { Container } from "react-bootstrap";
import logo from "../../assets/logo-footer.svg";
import inst from "../../assets/insta-logo.svg";
import tg from "../../assets/tg-logo.svg";

const Footer = () => {
  return (
    <footer id="#footer" className="footer">
      <Container>
        <section className="footer__wrapper">
          <img className="footer__logo" src={logo} alt="logo" />
          <div className="footer__info">
            <div className="footer__social">
              <a href="/">
                <img src={inst} alt="inst" />
              </a>
              <a href="/">
                <img src={tg} alt="tg" />
              </a>
            </div>
            <a href="tel:>+380632959560">+380 (63) 295 95 60</a>
            <a href="mailto:ecocountry4@gmail.com">ecocountry4@gmail.com</a>
          </div>
          <a href="#form" className="footer__button">
            Отримати Консультацію
          </a>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
