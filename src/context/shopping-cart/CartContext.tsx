"use client";
import { createContext } from "react";
import { ContextCartProps } from "../../utils/features/context/interfaces";

export const CartContext = createContext({} as ContextCartProps);
