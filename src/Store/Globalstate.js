import React, { createContext, useReducer } from "react";
const initialState = { receiverID: 1, receiverName: "Kazi Niger Afrose" };
// const initialState = {};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHAT_SEND":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
