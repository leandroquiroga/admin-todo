"use client";
import { useReducer } from "react";
import { UIProviderProps, UIState } from "../interfaces";
import { UIContext } from "./UIContext";
import { uiReducer } from "./UIReducer";

const UI_INITIAL_STATE: UIState = {
  showCart: false,
};

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleShowCart = (payload: boolean) => {
    dispatch({ type: "[UI] SHOW_CART", payload });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleShowCart,
      }}>
      {children}
    </UIContext.Provider>
  );
};
