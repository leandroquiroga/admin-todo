"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

import {
  addProductToCart,
  removeOneProduct,
  removeProductFromCart,
} from "../actions/actions";
import { ProductCookiesProps } from "@/utils/features/products/interfaces";
import { formatPrice } from "@/utils/features/shopping-cart/functions";

export const CartProduct = ({
  id,
  image,
  name,
  price,
  quantity,
  sizeSelected,
}: ProductCookiesProps) => {
  const router = useRouter();

  useEffect(() => {
    // Verifica que el producto actual tenga una cantidad de 0 para eliminarlo del carrito
    if (quantity === 0) {
      removeProductFromCart(id, sizeSelected);
      router.refresh();
    }
  }, [quantity]);

  const onAddToCart = () => {
    addProductToCart(id, sizeSelected);

    router.refresh();
  };

  const handleRemoveAll = () => {
    removeProductFromCart(id, sizeSelected);
    router.refresh();
  };

  const onRemoveItem = () => {
    removeOneProduct(id, sizeSelected);
    router.refresh();
  };

  return (
    <div className="flex flex-col p-2">
      <div className="mx-auto w-full sm:justify-center flex flex-col">
        <div className="justify-between sm:justify-center flex mx-2 rounded-lg bg-white border p-2 shadow-xl">
          <div>
            <Image
              src={image}
              alt="product-image"
              className="rounded-lg flex justify-center items-center"
              width={100}
              height={100}
            />
          </div>
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between w-11/12 ml-3">
            <div className="mt-2 sm:mt-0">
              <h2 className="text-sm font-bold text-gray-900">{name}</h2>
              <p className="mt-2 text-xs text-gray-700">
                Talle: {sizeSelected}
              </p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <button
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  onClick={onRemoveItem}>
                  {" "}
                  -{" "}
                </button>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value={quantity}
                  defaultValue={quantity}
                  min={1}
                />
                <button
                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  onClick={onAddToCart}>
                  {" "}
                  +{" "}
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">${formatPrice(price * quantity)}</p>
                <button onClick={handleRemoveAll} className="cursor-pointer">
                  <IoCloseOutline size={25} className="hover:text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
