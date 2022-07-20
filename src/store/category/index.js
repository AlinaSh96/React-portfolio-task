import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../constants/data"

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    entities: categories.reduce((acc, categories) => {
      acc[categories.id] = categories;

      return acc;
    }, {}),
    ids: categories.map(({ id }) => id),
  },
  reducers: {},
});

export default categorySlice;