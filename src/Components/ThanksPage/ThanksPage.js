import logo from "../../assets/thanks-logo.png";
import "./ThanksPage.scss";

const ThanksPage = () => {
  return (
    <div className="thanks">
      <div className="thanks__wrapper">
        <img src={logo} alt="thanks" />
        <h1
          className="thanks__title"
        >
          Ваш запит важливий для нас!
        </h1>
        <p className="thanks__text">
          Дякуємо за Вашу заявку. Наша команда експертів вже працює над обробкою
          вашого запиту. Ми зв'яжемося з вами найближчим часом.
        </p>
      </div>
    </div>
  );
};

export default ThanksPage;
