import { formatPrice } from "@/utils/features/shopping-cart/functions";
import { CheackoutProps } from "@/utils/features/shopping-cart/interfaces";
import React from "react";

const SHIPPING = 4500;
export const Cheackout = ({ labelButton, items }: CheackoutProps) => {
  console.log({ items });

  const totalToPay = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">$ {formatPrice(totalToPay)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Envio</p>
        <p className="text-gray-700">$ {formatPrice(SHIPPING)}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">
            $ {formatPrice(totalToPay + SHIPPING)}
          </p>
          <p className="text-sm text-gray-700">Incluye Impuestos</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        {labelButton}
      </button>
    </div>
  );
};
