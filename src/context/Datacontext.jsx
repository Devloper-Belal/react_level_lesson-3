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
  const changeName = (theName) => {
    dispatch({ type: "CHANGE_NAME", NEW_VALUE: theName });
  };
  const changeAge = (theAge) => {
    dispatch({ type: "CHANGE_AGE", NEW_VALUE: theAge});
  };
  const Light = (light) => {
    dispatch({ type: "NEW_COLOR", NEW_VALUE: light });
  };
  const Toggle = (newColor) => {
    dispatch({ type: "NEW_COLOR", NEW_VALUE: newColor });
  };
  const darck = (darck) => {
    dispatch({ type: "NEW_COLOR", NEW_VALUE: darck });
  };
  const pink = (pink) => {
    dispatch({ type: "NEW_COLOR", NEW_VALUE: pink });
  };
  const grey = (grey) => {
    dispatch({ type: "NEW_COLOR", NEW_VALUE: grey});
  };
  const changeCount = (newcount) => {
    dispatch({
      type: "CHANGE_COUNT",
      NEW_VALUE: newcount,
    });
  };

  return (
    <ThemeContexttt.Provider
      value={{
        ...firstState,
        changeName,
        Light,
        darck,
        pink,
        grey,
        changeCount,
        Toggle,changeAge
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
