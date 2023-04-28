import React from "react";
import "./Footer.scss"
import Logo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={Logo} className="logo"/>
        <div className="contacts">
        г. Москва, Цветной б-р, 40<br/>+7 495 771 21 11<br/>info@skan.ru<br/><br/>Copyright. 2022
        </div>
      </div>
    </footer>
  )
}

export default Footer;