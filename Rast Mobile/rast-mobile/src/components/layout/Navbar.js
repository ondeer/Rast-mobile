import { useState } from "react";

import {
  FaLinkedinIn,
  FaBehance,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import logoSvg from "../../assets/logo.svg";

import headerMock from "../../mock/header";

import classes from "./Navbar.module.css";

const Navbar = () => {
  /*State Tanımlamaları*/
  const [mobileNav, setMobileNav] = useState(false);
  /*Navbar butonuna basılıp basılmama durumuna göre setState fonksiyonu yazıldı*/
  const navHandler = () => {
    setMobileNav(!mobileNav);
  };
  /*Mobil navbar için active classının kontrolü yapıldı*/
  const classMobile = mobileNav === true ? classes.active : "";
  return (
    <div className={`${classes.header} ${classMobile} `}>
      <img src={logoSvg} alt="logo" />
      <ul className={classes.link}>
        {headerMock.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>

      <ul className={classes.icon}>
        <li>
          <FaYoutube />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaBehance />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
      <div className={classes.hamburgerNav}>
        <input type="checkbox" onClick={navHandler} />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
