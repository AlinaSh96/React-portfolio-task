import Menu from '../Menu/Menu';
import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

const Header = () => (
  <div className={classnames(styles.root)}>
   <Menu/>
   <div className={classnames(styles.headerContainer)}>
   <div className={classnames(styles.headerText)}>
       Portfolio</div>
   <div className={classnames(styles.headerDescription)}>Agency provides a full service range including technical skills, design, business understanding</div>
  </div>
  </div>
);

//export default React.memo(Menu);
export default Header;