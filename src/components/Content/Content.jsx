//import Elements from '../Elements/Elements';
import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { Elements } from "../../components/Elements/Elements";
import { useSelector } from "react-redux";
import {
  selectCategoryIds,
  selectNames,
} from "../../store/category/selectors";


const Content = () => {
  const categoryIds = useSelector(selectCategoryIds);
  const categoryLabels = useSelector(selectNames);
  return (
  <div className={classnames(styles.root)}>
  <Elements categoryIds={categoryIds} categoryLabels={categoryLabels}/>
  </div>
  )
}

export default Content;