import { Container } from "react-bootstrap";
import "./Faq.scss";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <section className="faq">
      <Container>
        <h2 className="faq__title">Найчастіші запитання</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Як станція працює вночі?</Accordion.Header>
            <Accordion.Body>
              Електростанція вдень живитиме ваш будинок і одночасно заряджатиме
              акумулятори. В темну пору доби живлення відбуватиметься від
              енергії яку накопичили акумулятори. Коли акумулятори розрядяться,
              аж після того живлення відбуватиметься від мережі.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Скільки електроенергії генеруватиме СЕС?
            </Accordion.Header>
            <Accordion.Body>
              Усе залежить від потужностей сонячних панелей які ви встановили.
              Якщо встановлюємо 10шт панелей 500W, то загальна потужність
              згенерованої енергії складатиме 5 KW в годину. За сонячний день,
              ця цифра складатиме до 30KW щоденно, чого більш ніж достатньо для
              середньостатистичного приватного будинку.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Чи можна спочатку поставити інвертор з акумуляторами а вже потім
              сонячні панелі?
            </Accordion.Header>
            <Accordion.Body>
              Так, якщо ви плануєте будувати сонячну електростанцію, то спочатку
              ви можете встановити гібридний інвертор з системою накопичення, а
              вже потім змонтувати сонячні фотомодулі.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Чи витримає мій дах , сонячні панелі ?
            </Accordion.Header>
            <Accordion.Body>
              Встановлюється металоконструкція , яка навпаки укріплює дах. В
              зимній період панелі працюють так , що на них сніг не затримується
              , таким чином ми розвантажуємо дах.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Якщо мені не достатньо місця на даху ?
            </Accordion.Header>
            <Accordion.Body>
              Це не проблема! <br />
              1.Можна розширити дах , завдяки металоконструкції. <br />
              2.Можна зробити сумісний варіант (частину фотомодулів змонтувати
              на даху , частину на землі)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Faq;
