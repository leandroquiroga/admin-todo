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