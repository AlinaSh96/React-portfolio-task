export const selectCategoryState = (state) => state.category;

export const selectCategories = (state) =>
  Object.values(selectCategoryState(state).entities);

export const selectCategoryIds = (state) => selectCategoryState(state).ids;

export const selectNames = (state) =>  Object.values(selectCategoryState(state).entities).map(({category}) => category);


