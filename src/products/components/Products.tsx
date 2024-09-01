"use client";

import React, { MouseEvent, useState } from "react";
import Image from "next/image";
import { AviableSizes, Product } from "../../utils/features/products/interfaces";
import {
  addProductToCart,
} from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/utils/features/shopping-cart/functions";

let countClick = 0;
export const Products = ({ product }: Product) => {
  const router = useRouter();

  const { image, name, price, description, avaibleSizes, id } = product;
  const [sizeSelected, setSizeSelected] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [sizeAvailable, setSizeAvailable] = useState<string>("");

  const handleSize = (
    e: MouseEvent<HTMLInputElement>,
    value: AviableSizes,
    index: number
  ) => {
    countClick += 1;
    const { count, size } = value;
    setSizeSelected(size);

    // Averiguamos si el contador es mayor a 0
    if (countClick > 1 && count === 0) {
      setSizeAvailable("No disponible");
      setDisableButton(true);
      return;
    }

    // Averiguamos si la cantidad del producto es igual a 0
    if (count === 0) {
      const element = e.target as HTMLInputElement;
      const textContentDispo =
        element.parentElement?.parentElement?.parentElement?.parentElement
          ?.childNodes[3];
      setSizeAvailable(
        textContentDispo?.childNodes[index].textContent as string
      );
      setDisableButton(true);
      return;
    }

    setDisableButton(false);
    return;
  };

  const addToCart = () => {
    if (!sizeSelected) {
      setErrorMessage("Seleccione un talle por favor!");
      return;
    }
    setErrorMessage("");
    addProductToCart(id, sizeSelected);
    router.refresh();
  };

  // Usarlo en el carrito de compras
  // const onRemoveFromCart = (id: string) => {
  //   removeProductFromCart(id);
  //   router.refresh();
  // };

  return (
    <>
      <div className="flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-2">
        <div className="mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
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
              ${formatPrice(price)}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center my-2 mx-4 p-2 border-slate-200">
          {avaibleSizes.map((value, index) => (
            <div
              className="space-x-4 flex flex-row justify-center items-center text-sm"
              key={index}>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value={sizeSelected}
                  onClick={(e) => handleSize(e, value, index)}
                />
                <div
                  className={`w-9 h-9 cursor-pointer rounded-lg flex items-center justify-center text-slate-700 peer-checked:text-white ${
                    sizeSelected
                      ? "peer-checked:font-semibold peer-checked:bg-slate-900"
                      : ""
                  } `}>
                  {value.size}
                </div>
              </label>
            </div>
          ))}
        </div>
        {sizeSelected && (
          <div className="text-center p-2 border-b border-slate-200">
            {avaibleSizes.map((value, index) => (
              <span
                key={index}
                className={`font-semibold text-xs text-center ${
                  value.count === 0 ? "text-red-400" : ""
                }`}>
                {sizeSelected === value.size &&
                  (value.count === 0
                    ? "No disponible"
                    : `Disponibilidad: ${value.count} `)}
              </span>
            ))}
          </div>
        )}
        <div className="p-4 flex flex-col justify-center items-center">
          <button
            disabled={disableButton}
            onClick={addToCart}
            className="block border w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Add to Cart
          </button>
          {!sizeSelected ||
            (sizeAvailable === "No disponible" && (
              <span className="text-sm text-red-400 text-center my-2">
                {errorMessage}
              </span>
            ))}
        </div>
      </div>
    </>
  );
};
