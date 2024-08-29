"use client";

import React, { useReducer } from "react";
import { CartProviderProps, CartState } from "../interfaces/index";
import { cartReducer } from "./CartProvider";
import { CartContext } from "./CartContext";

const CART_INITIAL_STATE: CartState = {
  quantityCart: 0,
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const addQuantityCart = (payload: number) => {
    dispatch({ type: "[CART] ADD_PRODUCT", payload });
  };

  const removeQuantityCart = (payload: number) => {
    dispatch({ type: "[CART] REMOVE_PRODUCT", payload });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        addQuantityCart,
        removeQuantityCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
