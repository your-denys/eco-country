import Container from "react-bootstrap/Container";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <header>
      <div className="tel">
        <Container>
          <a href="tel:>+380632959560">+380 (63) 295 95 60</a>
        </Container>
      </div>
      <Container>
        <Navigation/>
      </Container>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed"
      ></motion.div>
    </header>
  );
};

export default Header;
