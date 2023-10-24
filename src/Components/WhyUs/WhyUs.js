import React from "react";
import "./WhyUs.scss";
import { Container } from "react-bootstrap";
import { Paper } from "@mui/material";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <>
      <section className="why-us">
        <Container>
          <motion.h2
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="why-us__title"
          >
            Чому обирають нас?
          </motion.h2>
          <div className="why-us__wrapper">
            <Paper className="why-us__card" elevation={1}>
              <h3 className="why-us__card-title">Якість</h3>
              <p className="why-us__card-text">
                Співпраця з визначеними лідерами у виробництві сонячної енергії.
                Довготривала ефективність станції гарантується якістю та
                надійністю.
              </p>
            </Paper>
            <Paper className="why-us__card" elevation={1}>
              <h3 className="why-us__card-title">Досвід</h3>
              <p className="why-us__card-text">
                Обширний досвід у проектуванні та будівництві станцій
                мегаватного класу. Понад 200 клієнтів, які залишились
                задоволеними.
              </p>
            </Paper>
            <Paper className="why-us__card" elevation={1}>
              <h3 className="why-us__card-title">Обслуговування</h3>
              <p className="why-us__card-text">
                Спеціалізоване обслуговування, технічна підтримка, ведення
                моніторингу роботи сонячної електростанції та система
                зворотнього зв'язку з клієнтом.
              </p>
            </Paper>
            <Paper className="why-us__card" elevation={1}>
              <h3 className="why-us__card-title">Надійність</h3>
              <p className="why-us__card-text">
                На ринку понад 3 років, що гарантує надійне обслуговування
                електростанцій. Наша компанія володіє високою репутацією у сфері
                сонячної енергетики.
              </p>
            </Paper>
          </div>
          <a className="why-us__button" href="#form">
            Розрахувати вартість
          </a>
        </Container>
      </section>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed"
      ></motion.div>
    </>
  );
};

export default WhyUs;
