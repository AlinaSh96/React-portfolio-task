import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import logo from './img/logo.png';

const Menu = () => {
const menuCategory = ['About', 'Services', 'Pricing', 'Blog'];
return(
  <div className={classnames(styles.root)}>
    <div className={classnames(styles.logo)}>
    <img src={logo} alt="logo" />
    </div>
    <div><ul className={classnames(styles.list)}>
        {menuCategory.map( elem => <li className={classnames(styles.listElement)}>{elem}</li>)}
        </ul></div>
        <button className={classnames(styles.button)}>Contact</button>
  </div>)
};

export default Menu;