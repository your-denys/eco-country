import React from "react";
import "./Contact.scss";
import { Container } from "react-bootstrap";
import Form from "./Form";
import { Paper } from "@mui/material";

const Contact = () => {
  return (
    <div className="contact" id="form">
      <Container>
        <Paper elevation={3}>
          <div className="contact__title-wrapper">
            <h2 className="contact__title">
              Оформіть заявку для отримання консультації
            </h2>
            <p className="contact__text">
              Дізнайтеся, про всю економію від використання сонячної енергії в
              різних регіонах України.
            </p>
          </div>
          <Form />
        </Paper>
      </Container>
    </div>
  );
};

export default Contact;
