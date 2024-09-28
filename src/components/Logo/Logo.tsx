import { FC } from 'react';

import style from './Logo.module.css';

const Logo: FC<LogoInterface> = ({ children }) => {
  return (
    <a className={style.logo} href="#">
      <img src="/public/logo.png" alt="logo" />
      {children}
    </a>
  );
};

export default Logo;
