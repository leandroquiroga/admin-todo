import { ReactNode } from "react";

// UI - Interfaces
export interface ContextUIProps {
  showCart: boolean;
  toggleShowCart: (payload: boolean) => void;
}

export interface UIState {
  showCart: boolean;
}

export interface UIProviderProps {
  children: ReactNode;
}

// UI - Types 
export type UIActionTypes = | { type: "[UI] SHOW_CART", payload: boolean }


export interface ContextCartProps {
  quantityCart: number;
  addQuantityCart: (payload: number) => void;
  removeQuantityCart: (payload: number) => void;
}

export interface CartState {
  quantityCart: number;
}

export interface CartProviderProps {
  children: ReactNode;
}
export type CartActionTypes =
  | { type: "[CART] ADD_PRODUCT"; payload: number }
  | { type: "[CART] REMOVE_PRODUCT"; payload: number }