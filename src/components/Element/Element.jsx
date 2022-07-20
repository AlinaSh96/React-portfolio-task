import React from "react";
import styles from "./styles.module.css";
import ElementContainer from "../../containers/element/element";

const Element = ({elementId, categoryName, onClick, isActive, onKey}) => {

return(
  <>
 <ElementContainer elementId={elementId} categoryName={categoryName} onClick={onClick}
 isActive={isActive} onKey={onKey} styles={styles}/>
  </>)
};

export default Element;