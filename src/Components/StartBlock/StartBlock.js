import { Container } from "react-bootstrap";
import "./StartBlock.scss";
import { motion } from "framer-motion";

const StartBlock = () => {
  return (
    <div className="mt-4 mb-3 start">
      <Container>
        <section className="start-block">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            viewport={{once: true}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0 }}
            className="start-block__text"
          >
            Встановлюємо сонячні електростанції під ключ з гарантією{" "}
            <span className="start-block__green-bg">15 років</span>
          </motion.h1>
          <motion.a
                  viewport={{once: true}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1}}
            href="#form"
            className="start-block__button"
          >
            Розрахувати вартість
          </motion.a>
        </section>
      </Container>
    </div>
  );
};

export default StartBlock;
