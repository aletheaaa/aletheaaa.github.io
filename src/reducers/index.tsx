import { combineReducers } from "redux";

const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case "CHANGETODARK":
      return { ...state, theme: "dark" };
    case "CHANGETOLIGHT":
      return { ...state, theme: "light" };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
