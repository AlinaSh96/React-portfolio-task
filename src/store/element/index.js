import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../constants/data"
import { categories } from "../../constants/data"

const elementSlice = createSlice({
  name: "element",
  initialState: {
    entities: data.reduce((acc, element) => {
      acc[element.id] = element;

      return acc;
    }, {}),
  },
  reducers: {
    delete: (state, { payload }) => {
   //  state.entities[payload] = undefined;
   //  delete state.entities[payload];
 const dat = Object.values(state.entities).filter(({ id }) => id !== payload);
 state.entities = dat.reduce((acc, element) => {
  acc[element.id] = element;

  return acc;
}, {})
   },
  },
});
export default elementSlice;
