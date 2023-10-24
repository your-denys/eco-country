import React from "react";
import "./Steps.scss";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <section className="steps">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay:0.3 }}
          className="steps__title"
        >
          5 етапів до власної електростанції
        </motion.h2>
        <div className="steps__wrapper">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay:0.6 }}
            className="steps__content"
          >
            <h3 className="steps__subtitle">1</h3>
            <p className="steps__text">
              Оформлення запиту або телефонний дзвінок
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay:0.9 }}
            className="steps__content"
          >
            <h3 className="steps__subtitle">2</h3>
            <p className="steps__text">
              {" "}
              Консультація та вимірювання на об'єкті
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay:1.2 }}
            className="steps__content"
          >
            <h3 className="steps__subtitle">3</h3>
            <p className="steps__text">Підписання договору</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="steps__content"
          >
            <h3 className="steps__subtitle">4</h3>
            <p className="steps__text">Встановлення сонячної електростанції</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay:1.8 }}
            className="steps__content"
          >
            <h3 className="steps__subtitle">5</h3>
            <p className="steps__text">
              Отримання гарантії та договору на обслуговування
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Steps;
