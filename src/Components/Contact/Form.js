import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

import "./Contact.scss";
import { TextField } from "@mui/material";

const Form = () => {
  const form = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_name: "",
    phone: "",
  });

  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kkh37p7",
        "template_9qo6fgx",
        form.current,
        "KkbkqN_Jk5rhUucCC"
      )
      .then(
        (result) => {
          setFormData({
            user_name: "",
            phone: "",
          });
          navigate("/thankyoupage");
        },
        (error) => {
          setError('Щось пішло не так... Ми вже працюємо над цим.')
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      {error && <p className="text-danger">{error}</p>}
      <TextField
        id="standard-basic"
        label="Ваше Ім’я"
        variant="standard"
        className="form__input"
        type="text"
        autoComplete="false"
        required
        name="user_name"
        value={formData.user_name}
        onChange={handleInputChange}
        color="success"
      />
      <TextField
        id="standard-basic"
        label="Ваш номер телефону"
        variant="standard"
        className="form__input"
        type="number"
        autoComplete="false"
        required
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        color="success"
      />
      <div className="form__button-wrapper">
        <input
          className="form__button"
          type="submit"
          value="Отримати Консультацію"
        />
        <p className="form__text">
          Консультація надається безкоштовно. Наш фахівець зв'яжеться з вами,
          щоб надати консультацію та провести попередній розрахунок окупності.
        </p>
      </div>
    </form>
  );
};

export default Form;
