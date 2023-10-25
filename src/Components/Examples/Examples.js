import React from "react";
import { Container } from "react-bootstrap";
import example1 from "../../assets/client-1.jpg";
import example2 from "../../assets/client-2.jpg";
import example3 from "../../assets/client-3.jpg";
import example4 from "../../assets/client-4.jpg";
import "./Examples.scss";
import { motion } from "framer-motion";

const Examples = () => {
  return (
    <section className="examples" id="examples">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="examples__title"
        >
          Наші клієнти не платять за електроенергію та отримують гроші від
          держави
        </motion.h2>
        <div className="examples__wrapper">
          <article className="examples__item">
            <img className="examples__img" src={example1} alt="example" />
            <div className="examples__content">
              <h3 className="examples__content-title">
                Сонячна електростанція 30 кВт
              </h3>
              <ul className="examples__content-info">
                <li className="examples__content-list">
                  Місцезнаходження: місто Чортків, Тернопільська обл.
                </li>
                <li className="examples__content-list">
                  Змонтовано: жовтень 2022 р.
                </li>
                <li className="examples__content-list">
                  Строк служби: 25-30 років
                </li>
              </ul>
              <div className="examples__content-wrapper">
                <a href="#form" className="examples__content-price">
                  Від <span style={{ color: "#0DC884" }}>$10000</span>
                </a>
              </div>
            </div>
          </article>
          <article className="examples__item">
            <img className="examples__img" src={example2} alt="example" />
            <div className="examples__content">
              <h3 className="examples__content-title">
                Сонячна електростанція 15 кВт
              </h3>
              <ul className="examples__content-info">
                <li className="examples__content-list">
                  Місцезнаходження: місто Запоріжжя, Запорізька обл.
                </li>
                <li className="examples__content-list">
                  Змонтовано: вересень 2020 р.
                </li>
                <li className="examples__content-list">
                  Строк служби: 25-30 років
                </li>
              </ul>
              <div className="examples__content-wrapper">
                <a href="#form" className="examples__content-price">
                  Від <span style={{ color: "#0DC884" }}>$10000</span>
                </a>
              </div>
            </div>
          </article>
          <article className="examples__item">
            <img className="examples__img" src={example3} alt="example" />
            <div className="examples__content">
              <h3 className="examples__content-title">
                Сонячна електростанція 10 кВт
              </h3>
              <ul className="examples__content-info">
                <li className="examples__content-list">
                  Місцезнаходження: село Радовичи, Волинська область
                </li>
                <li className="examples__content-list">
                  Змонтовано: травень 2022 р.
                </li>
                <li className="examples__content-list">
                  Строк служби: 25-30 років
                </li>
              </ul>
              <div className="examples__content-wrapper">
                <a href="#form" className="examples__content-price">
                  Від <span style={{ color: "#0DC884" }}>$10000</span>
                </a>
              </div>
            </div>
          </article>
          <article className="examples__item">
            <img className="examples__img" src={example4} alt="example" />
            <div className="examples__content">
              <h3 className="examples__content-title">
                Сонячна електростанція 5 кВт
              </h3>
              <ul className="examples__content-info">
                <li className="examples__content-list">
                  Місцезнаходження: село калинівка, Черкаська обл.
                </li>
                <li className="examples__content-list">
                  Змонтовано: серпень 2021 р.
                </li>
                <li className="examples__content-list">
                  Строк служби: 25-30 років
                </li>
              </ul>
              <div className="examples__content-wrapper">
                <a href="#form" className="examples__content-price">
                  Від <span style={{ color: "#0DC884" }}>$10000</span>{" "}
                </a>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Examples;
