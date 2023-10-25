import "./Navigation.scss";
import logo from "../../assets/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Navigation = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  // const isMobile = window.innerWidth <= 992;

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1 }}
    viewport={{once:true}}
    >
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" mb-lg-3 mt-lg-3 mt-sm-2 mb-sm-2 navigation"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleOffcanvasToggle}
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleOffcanvasClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton onHide={handleOffcanvasClose} />
              <Offcanvas.Body className="burger-menu">
                <Nav className="align-items-center flex-grow-1">
                  <ScrollLink
                  className="nav-link"
                    to="services"
                    smooth={true}
                    duration={300}
                    onClick={handleOffcanvasClose}
                  >
                    Послуги
                  </ScrollLink>
                  <ScrollLink
                  className="nav-link"
                    to="benefits"
                    smooth={true}
                    duration={300}
                    onClick={handleOffcanvasClose}
                  >
                    Переваги
                  </ScrollLink>
                  <ScrollLink
                  className="nav-link"
                    to="examples"
                    smooth={true}
                    duration={300}
                    onClick={handleOffcanvasClose}
                  >
                    Приклади
                  </ScrollLink>
                  <ScrollLink
                  className="nav-link"
                    to="footer"
                    smooth={true}
                    duration={300}
                    onClick={handleOffcanvasClose}
                  >
                    Контакти
                  </ScrollLink>
                </Nav>
                <ScrollLink
                  to="form"
                  smooth={true}
                  duration={300}
                  onClick={handleOffcanvasClose}
                  className="navigation__button"
                >
                  Отримати консультацію
                </ScrollLink>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </motion.div>
  );
};

export default Navigation;
