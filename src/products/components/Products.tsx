"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../interfaces";

export const Products = ({ product }: Product) => {
  const { image, name, price, description, avaibleSizes } = product;
  const [sizeSelected, setSizeSelected] = useState<string>("");

  const handleSize = (size: string) => {
    setSizeSelected(size);
  };
  return (
    <>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-2">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <Image
            src={image}
            className="h-full w-full object-cover"
            width={300}
            height={300}
            alt="Apple AirPods"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center mt-4 mb-6 pb-6 border-b border-slate-200">
          {avaibleSizes.map((value) => (
            <div className="space-x-2 flex flex-row justify-center items-center text-sm">
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value={sizeSelected}
                  onClick={() => handleSize(value.size)}
                />
                <div className="w-9 h-9 cursor-pointer rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  {value.size}
                </div>
              </label>
            </div>
          ))}
        </div>
        {sizeSelected && (
          <div className="flex items-center justify-center mt-4 mb-6 pb-6 border-b border-slate-200">
            {avaibleSizes.map((value) => (
              <div className="space-x-2 text-sm">
                {sizeSelected === value.size && (
                  <span className="font-semibold text-xs text-center">
                    Disponibilidad: {value.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="p-6 pt-0">
          <button
            className="block border w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
