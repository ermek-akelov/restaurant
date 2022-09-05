import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__wrapper section__padding" style={{backgroundColor: '#0c0c0c'}} id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Контакты" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '2rem',}}>Ждем вас по адресу</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">ул. Копылова, 74, Красноярск, Красноярский край, 660100</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Мы работаем</p>
        <p className="p__opensans">Каждый день, с 11:00 до 00:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Ждем вас</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;