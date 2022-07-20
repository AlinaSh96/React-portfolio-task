//import styles from "./styles.module.css";
import { useSelector } from "react-redux";
//import { ReactComponent as Logo} from "./img/logo.svg"
import classnames from "classnames";

import {
  selectElementName,
  selectElementPath
} from "../../store/element/selectors";


const ElementContainer = ({elementId, categoryName, onClick, isActive, onKey, styles}) => {
  const elementName = useSelector((state) =>
    selectElementName(state, elementId)
  );

  const elementPath = useSelector((state) =>
  selectElementPath(state, elementId)
);

return(
  <div tabIndex="0" onKeyDown = {onKey}  onClick = {onClick} className={classnames(styles.background, {
    [styles.active]: isActive,
  })}>
<img  src = {elementPath} alt = 'test'/>
      <div className={classnames(styles.info)}>
        <button className={classnames(styles.button)}>{categoryName}</button>
        <div className={classnames(styles.text)}>{elementName}</div>
        </div>
  </div>)
};

export default ElementContainer;