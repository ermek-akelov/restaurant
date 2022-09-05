import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Почувствуй вкус Греции" />
      <h1 className="app__header-h1">Таверна «Иоанидис»</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Это удачное сочетание современного дизайна и традиций Греции. Высокий уровень комфорта и колорит обстановки создают по-южному теплую атмосферу. В меню для гурманов: баклажаны и говядина «Мусакас», знаменитая греческая Пита из трех видов сыра  и уникальная коллекция греческих вин! Таверна «Иоанидис» — уютное место для теплой компании!</p>
      <button type="button" className="custom__button">Открыть меню</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;