export const selectElementState = (state) => state.element;

export const selectElementName = (state, id) =>
selectElementState(state).entities[id]?.name;

export const selectElementPath = (state, id) =>
selectElementState(state).entities[id]?.img

export const selectElementIsSelected = (state) =>{ 
  return selectElementState(state)
}

export const selectElementIsSelectedId = (state) => {
    return Object.values(selectElementState(state).entities).find(({ isSelected }) => isSelected === true);
  }

  export const selectElementByCategoryObj = (state, category) => {
    return Object.values(selectElementState(state).entities)
    .filter((elem) => elem.category === category)
  }

  export const selectElementAll = (state) => {
    return Object.values(selectElementState(state).entities);
  }
