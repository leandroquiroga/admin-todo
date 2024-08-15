import { cookies } from "next/headers";
import React from "react";
import { CookiesCart } from "../shopping-cart/actions/actions";
import {
  CiChat1,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";

export const TopMenu = () => {
  // Obtenemos la cookie
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");

  const getCartTotal = (cart: CookiesCart): number => {
    let items = 0;
    Object.values(cart).forEach((value) => (items += value as number));

    return items;
  };

  const totalItems = getCartTotal(cart);

  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
          Dashboard
        </h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
          <CiMenuBurger size={30} />
        </button>
        <div className="flex space-x-2">
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
            <CiSearch />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <CiChat1 size={25} />
          </button>
          {/* TODO: Hacer un componente del carrito de compras */}
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
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
        </div>
      </div>
    </div>
  );
};
