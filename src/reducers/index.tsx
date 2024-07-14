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

// reducer to check which section is currently in view
const sectionReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case "INTRODUCTION":
      return { ...state, section: "INTRODUCTION" };
    case "PROJECTS":
      return { ...state, section: "PROJECTS" };
    case "WORKEXPERIENCE":
      return { ...state, section: "WORKEXPERIENCE" };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  section: sectionReducer,
});

export default rootReducer;
