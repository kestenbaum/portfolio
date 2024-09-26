import style from './Header.module.css';

const menu = ['Home', 'Work', 'Contact'];

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.header}>
          <a href="javascript:void(0)">O.Vovnenko</a>
          <menu>
            {menu.map((menu, idx) => (
              <li key={idx}>{menu}</li>
            ))}
          </menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
