import { useState } from 'react';
import style from './Header.module.css';

const menu = ['Home', 'Work', 'Skills', 'Contact'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className={style.container}>
        <div className={style.header}>
          <a className={style.logo} href="#">
            <img src="/public/logo.png" alt="logo" />
            O.Vovnenko
          </a>
          <menu className={isOpen ? style.active : undefined}>
            {menu.map((menu, idx) => (
              <li
                className={style.item}
                key={idx}
                onClick={() => setIsOpen(false)}
              >
                {menu}
              </li>
            ))}
          </menu>
          <div
            className={!isOpen ? style.burger : style.none}
            onClick={() => setIsOpen(true)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
