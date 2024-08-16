import React from "react";
import Image from "next/image";

export const CartProduct = () => {
  return (
    <div className="items-center flex py-8 md:py-10 lg:py-8 border-b border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <Image
          src="/images/products/creaslim-F7eJxHoR1lg-unsplash.jpg"
          alt="Black Leather Bag"
          width={50}
          height={50}
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800 dark:text-white">
            Jeans Clasico Verde Gastado
          </p>
        </div>
        <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
          Desctiption: Jeans Clasico de color verde gastado, estilo clasico y
          comodo
        </p>
        <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
          Size: L
        </p>
        <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
          Price: $19,000
        </p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
              Add to favorites
            </p>
            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800 dark:text-white">
            $19,000
          </p>
        </div>
      </div>
    </div>
  );
};
