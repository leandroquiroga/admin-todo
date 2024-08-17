"use client";
import React, { useContext } from "react";
import { UIContext } from "@/context";
import { CiShoppingCart } from "react-icons/ci";

export interface ShoppingCartProps {
  totalItems: number;
}
export const ShoppingCart = ({ totalItems }: ShoppingCartProps) => {
  const { toggleShowCart, showCart } = useContext(UIContext);
  return (
    <>
      <button
        className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
        onClick={() => toggleShowCart(!showCart)}>
        <div className="relative py-2">
          <div className="bottom-7 absolute left-5">
            {totalItems > 0 && (
              <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2.5 text-xs text-white">
                {totalItems}
              </p>
            )}
          </div>
          <CiShoppingCart size={25} />
        </div>
      </button>
    </>
  );
};
