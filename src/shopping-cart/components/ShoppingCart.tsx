"use client";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useRouter } from "next/navigation";
// import { products } from "../../products/data/index";

export interface ShoppingCartProps {
  totalItems: number;
}
export const ShoppingCart = ({ totalItems }: ShoppingCartProps) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard/shopping-cart");
  };

  return (
    <>
      <button
        className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
        onClick={handleRedirect}>
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
