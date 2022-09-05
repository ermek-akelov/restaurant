// import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import images from '../../constants/images';
// import './Navbar.css';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = React.useState(false);
//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.ioanidis} alt="app__logo" />
//       </div>
//       <ul className="app__navbar-links">
//         <li className="p__opensans"><a href="#home">Главная</a></li>
//         <li className="p__opensans"><a href="#about">О нас</a></li>
//         <li className="p__opensans"><a href="#menu">Меню</a></li>
//         <li className="p__opensans"><a href="#awards">Достижения</a></li>
//         <li className="p__opensans"><a href="#contact">Контакты</a></li>
//       </ul>
//       <div className="app__navbar-login">
//         <a href="#login" className="p__opensans">Авторизация</a>
//         <div />
//         <a href="/" className="p__opensans">Забронировать</a>
//       </div>
//       <div className="app__navbar-smallscreen">
//         <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
//         {toggleMenu && (
//           <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
//             <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
//             <ul className="app__navbar-smallscreen_links">
//               <li><a href="#home" onClick={() => setToggleMenu(false)}>Главная</a></li>
//               <li><a href="#about" onClick={() => setToggleMenu(false)}>О нас</a></li>
//               <li><a href="#menu" onClick={() => setToggleMenu(false)}>Меню</a></li>
//               <li><a href="#awards" onClick={() => setToggleMenu(false)}>Достижения</a></li>
//               <li><a href="#contact" onClick={() => setToggleMenu(false)}>Контакты</a></li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <NavLink to="/">
        <img src={images.ioanidis} alt="app__logo" />
        </NavLink>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><NavLink className="p__opensans" to="/">Таверна</NavLink></li>
        <li className="p__opensans"><NavLink className="p__opensans" to='/restaurant'>Ресторан</NavLink></li>
        <li className="p__opensans"><NavLink className="p__opensans" to='/catering'>Кейтеринг</NavLink></li>
        <li className="p__opensans"><NavLink className="p__opensans" to='/about'>О нас</NavLink></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Авторизация</a>
        <div />
        <a href="/" className="p__opensans">Забронировать</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><NavLink to="/" onClick={() => setToggleMenu(false)}>Таверна</NavLink></li>
              <li><NavLink to="/restaurant" onClick={() => setToggleMenu(false)}>Ресторан</NavLink></li>
              <li><NavLink to="/catering" onClick={() => setToggleMenu(false)}>Кейтеринг</NavLink></li>
              <li><NavLink to="/about" onClick={() => setToggleMenu(false)}>О нас</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;