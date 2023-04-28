import React from "react";
import "./Header.scss";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header container">
      <img className="logo" src={Logo}/>
      <nav className="nav">
        <ul className="menu">
          <li className="item">Главная</li>
          <li className="item">Тарифы</li>
          <li className="item">Faq</li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="btn">Зарегистрироваться</button>
        <div className="line"></div>
        <button className="btn active">Войти</button>
      </div>
    </header>
  )
}

export default Header;