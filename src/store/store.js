import { configureStore } from "@reduxjs/toolkit";
import ElementSlice from "./element";
import CategorySlice from "./category";

const rootReducer = (state, action) => ({
  element: ElementSlice.reducer(state?.element, action),
  category: CategorySlice.reducer(state?.category, action),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});                                
