import React, { useState } from "react";
import styles from "./styles.module.css";
import ElementsContainer from "../../containers/elements/elements";
import { TabsContainer } from "../../containers/tab/tab";
import { selectElementAll, selectElementByCategoryObj } from "../../store/element/selectors";
import { useSelector } from "react-redux";
export const Elements = ({ categoryIds, categoryLabels }) => {

  const [currentCategoryId, setCurrentCategoryId] = useState(
    categoryLabels[0]
  );

  const all = useSelector((state) =>
    selectElementAll(state)
  );

  const obj = useSelector((state) =>
    selectElementByCategoryObj(state, currentCategoryId)
  );

  if (!categoryIds?.length) {
    return null;
  }

  const elemId = currentCategoryId === 'Common' ? all : obj;
  return (
    <div>
      <TabsContainer
        selectedId={currentCategoryId}
        onTabSelect={setCurrentCategoryId}
      />
      <div className={styles.elementsConteiner}>
        <ElementsContainer categoryId={currentCategoryId} elementsIds={elemId} elementsIds1={elemId} />
      </div>
    </div>
  );
};
