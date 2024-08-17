"use client";

import React from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

import {} from "../actions/actions";
import { ProductInCartProps } from "../../products/interfaces/index";

export const CartProduct = ({ product, quantity }: ProductInCartProps) => {
  const router = useRouter();

  function onAddToCart() {
    //TODO: addProductToCart(product.id);
    router.refresh();
  }

  function onRemoveItem() {
    //TODO: removeSingleItemFromCart(product.id);
    router.refresh();
  }
  return (
    <div className="h-screen overflow-y-hidden overflow-x-hidden">
      <div className="flex flex-col bg-gray-100 pt-20 h-screen">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto w-full justify-center px-6 flex flex-col">
          <div className="rounded-lg">
            <div className="justify-between sm:justify-center flex mb-6 rounded-lg bg-white p-6 shadow-md">
              <Image
                src={product.image}
                alt="product-image"
                className="rounded-lg"
                width={100}
                height={100}
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg text-center font-bold text-gray-900">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      defaultValue={quantity}
                      min={1}
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">${product.price}</p>
                    <IoCloseOutline
                      size={25}
                      className="hover:text-red-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sub total */}
          {/* <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98</p>
                <p className="text-sm text-gray-700">Incluye Impuestos</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
