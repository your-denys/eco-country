import { Container } from "react-bootstrap";
import services1 from "../../assets/service-1.jpg";
import services2 from "../../assets/service-2.jpg";
import services3 from "../../assets/service-3.jpg";
import "./Services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <section className="services">
        <Container>
          <div id="services" className="services__title-block">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="services__title"
            >
              Ми забезпечуємо весь спектр послуг:
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="services__subtitle"
            >
              Від розробки станції та вибору обладнання до його монтажу та
              обслуговування сонячних електростанцій протягом усього періоду їх
              експлуатації.
            </motion.p>
          </div>
          <div className="services__wrapper">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="services__card"
            >
              <img className="services__img" src={services1} alt="service" />
              <div className="services__content">
                <h3 className="services__card-title">
                  Підбір найефективнішого обладнання.
                </h3>
                <p className="services__card-text">
                  Обираємо сонячні панелі, враховуючи місцезнаходження вашого
                  будинку, кількість прямого та розсіяного сонячного
                  випромінювання, щоб ваша сонячна електростанція генерувала
                  максимальну електроенергію і якнайшвидше окупилася.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="services__card"
            >
              <img className="services__img" src={services2} alt="service" />
              <div className="services__content">
                <h3 className="services__card-title">
                  Збірка обладнання відповідно до Державного стандарту України.
                </h3>
                <p className="services__card-text">
                  Експерти високого рівня володіють всіма необхідними навичками
                  та дозволами для виконання монтажних робіт та підключення
                  електрообладнання.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="services__card"
            >
              <img className="services__img" src={services3} alt="service" />
              <div className="services__content">
                <h3 className="services__card-title">
                  Підтримка при приєднанні до програми "Зелений тариф".
                </h3>
                <p className="services__card-text">
                  Ми відповідаємо за всі аспекти оформлення вашого підключення
                  до "Зеленого тарифу", включаючи розширення договірної
                  потужності вашого будинку, яке є безкоштовним при замовленні
                  сонячної електростанції.
                </p>
              </div>
            </motion.div>
          </div>
          <a href="#form" className="services__button button">
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

export default Services;
