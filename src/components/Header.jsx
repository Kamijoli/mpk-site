import { NavLink } from "react-router-dom";

export default function Header() {
  const cls = ({ isActive }) => "navLink" + (isActive ? " active" : "");

  return (
    <header className="header">
      <div className="headerLeft">
        <a className="headerLogo" href="/" aria-label="На главную">
          <img src="/images/logo.svg" alt="Логотип МПК" className="headerLogoImg" />
        </a>

        <nav className="nav">
          <NavLink className={cls} to="/">Главная</NavLink>
          <NavLink className={cls} to="/catalog">Каталог</NavLink>
          <NavLink className={cls} to="/about">О нас</NavLink>
          <NavLink className={cls} to="/contacts">Контакты</NavLink>
        </nav>
      </div>

      <a className="phonePill" href="tel:+76990348003" aria-label="Позвонить">
        <span className="phoneIcon">📞</span>
        <span className="phoneText">
          <span className="phoneTop">ПОЗВОНИТЬ</span>
          <span className="phoneNum">+7 699 034-8003</span>
        </span>
      </a>
    </header>
  );
}