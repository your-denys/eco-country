import { Container } from "react-bootstrap";
import benefit1 from "../../assets/benefit-1.png";
import benefit2 from "../../assets/benefit-2.png";
import benefit3 from "../../assets/benefit-3.png";
import benefit4 from "../../assets/benefit-4.png";
import "./Benefits.scss";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <section className="benefits">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          id="benefits"
          className="benefits__title"
        >
          Переваги використання незалежної сонячної електростанції.
        </motion.h2>
        <div className="benefits__wrapper">
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="benefits__card"
          >
            <img className="benefits__img" src={benefit1} alt="benefit" />
            <h3 className="benefits__card-title">Абсолютна самостійність</h3>
            <p className="benefits__card-text">
              Нехай сонячна електростанція забезпечить вашому будинку стабільну
              енергію та визволить його від залежності від центрального
              електропостачання.
            </p>
          </motion.div>
          <motion.div
            className="benefits__card"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img className="benefits__img" src={benefit2} alt="benefit" />
            <h3 className="benefits__card-title">
              Відстеження обсягів використаної енергії
            </h3>
            <p className="benefits__card-text">
              Надають змогу відслідковувати використання електроенергії за
              необхідними показниками.
            </p>
          </motion.div>
          <motion.div
            className="benefits__card"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <img className="benefits__img" src={benefit3} alt="benefit" />
            <h3 className="benefits__card-title">Простота та швидкість</h3>
            <p className="benefits__card-text">
              Легко встановлюється і зручна у використанні.
            </p>
          </motion.div>
          <motion.div
            className="benefits__card"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img className="benefits__img" src={benefit4} alt="benefit" />
            <h3 className="benefits__card-title">Екоактивізм</h3>
            <p className="benefits__card-text">
              Максимальний в збереження екології нашої планети
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
