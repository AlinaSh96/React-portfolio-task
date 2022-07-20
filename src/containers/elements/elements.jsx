import Element from "../../components/Element/Element";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import elementSlice from "../../store/element";


const ElementsContainer = ({ categoryId, className, onElementSelect, elementsIds1}) => {
  const dispatch = useDispatch();

const handleDeleteKey = (event, element) => {
  console.log(event.key)
 if (event.key === 'Delete'){
   dispatch(elementSlice.actions.delete(element));
  }
};

const [active, setActive] = useState(null);

  return categoryId?.length > 0 ? (
    <>
 {elementsIds1.map((element) => (
            <Element
                onClick = {() => setActive(element.id)}
                onKey = {(event) => handleDeleteKey(event, element.id)}
                isActive =  {active === element.id}
                elementId = {element.id}
                className = {className}
                categoryName = { element.category }
                onElementSelect={onElementSelect}
            />
        ))}
    </>
  ) : null;
};

export default ElementsContainer;
