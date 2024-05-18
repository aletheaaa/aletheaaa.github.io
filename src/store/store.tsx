import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../reducers/index";

const store = configureStore({
  reducer: themeReducer,
});

export default store;
