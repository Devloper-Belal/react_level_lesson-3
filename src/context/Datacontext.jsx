import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { name: "belal", age: 22, count: 0, theme: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.NEW_VALUE };
    case "CHANGE_AGE":
      return { ...state, age: action.NEW_VALUE };
    case "CHANGE_COUNT":
      return { ...state, count: action.NEW_VALUE };
    case "NEW_COLOR":
      return { ...state, theme: action.NEW_VALUE };

    default:
      return state;
  }
};
export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeName = () => {
    dispatch({ type: "CHANGE_NAME", NEW_VALUE: "eng-belalmmm" });
  };
const Light = () => {
  dispatch({ type: "NEW_COLOR", NEW_VALUE: "" });
}
const darck = () => {
  dispatch({ type: "NEW_COLOR", NEW_VALUE: "darck" });
}
const pink = () => {
  dispatch({ type: "NEW_COLOR", NEW_VALUE: "pink" });
}
const grey = () => {
  dispatch({ type: "NEW_COLOR", NEW_VALUE: "grey" });

}
const changeCount = () => {
  dispatch({ type: "CHANGE_COUNT", NEW_VALUE:initialData.count=initialData.count+1});
  
}

  return (
    <ThemeContexttt.Provider
      value={{ ...firstState, changeName , Light ,darck,pink,grey,changeCount}}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
