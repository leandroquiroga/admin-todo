import React from "react";
import { formatPrice } from "@/utils/features/shopping-cart/functions";
import { CheackoutProps } from "@/utils/features/shopping-cart/interfaces";

const SHIPPING = 4500;
export const Cheackout = ({ labelButton, items }: CheackoutProps) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalShipping = () => {
    if (total === 0) return 0;

    return formatPrice(SHIPPING);
  };

  const shipping = totalShipping();

  const totalPay = () => {
    if (total === 0) return 0;
    return formatPrice(total + SHIPPING);
  };

  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full md:w-2/4">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">$ {formatPrice(total)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Envio</p>
        <p className="text-gray-700">$ {shipping}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">$ {totalPay()}</p>
          <p className="text-sm text-gray-700">Incluye Impuestos</p>
        </div>
      </div>
      <button
        className={`${
          items.length === 0
            ? `bg-gray-400 hover:bg-gray-400 `
            : `bg-blue-500 hover:bg-blue-600`
        } py-1.5 rounded-md mt-6 w-full cursor-pointer text-blue-50 font-medium`}
        disabled={items.length === 0}>
        {labelButton}
      </button>
    </div>
  );
};
