import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding app__bg" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Наши контакты</h1>
        <p className="p__opensans">Ул. Копылова, 74, Красноярск, Красноярский Край, 660100</p>
        <p className="p__opensans">+7 (391) 244-07-60</p>
        <p className="p__opensans">+7 (391) 222-48-03</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.ioanidis} alt="footer_logo" />
        <p className="p__opensans">&quot;Лучшая греческая кухня по мнению нашего web-разработчика&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon__img"/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Рабочие часы</h1>
        <p className="p__opensans">Будни:</p>
        <p className="p__opensans">11:00 - 00:00</p>
        <p className="p__opensans">Выходные:</p>
        <p className="p__opensans">11:00 - 00:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Ioanidis. Все права защищены.</p>
      <p className="p__opensans">Сайт разработан Ermek Akella</p>
    </div>

  </div>
);

export default Footer;