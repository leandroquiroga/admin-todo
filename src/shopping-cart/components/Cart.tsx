"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {} from "../actions/actions";
import { CiCircleChevLeft } from "react-icons/ci";

import { ProductCardProps } from "@/products/interfaces";

interface Props {
  product?: ProductCardProps;
  quantity?: number;
}

export const Cart = ({ product, quantity }: Props) => {
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
    <div className="lg:w-1/3 w-full h-full bg-white dark:bg-white top-0 right-0 overflow-y-auto overflow-x-auto fixed sticky-0">
      <div className="flex items-center text-gray-500 dark:text-dark cursor-pointer">
        <CiCircleChevLeft size={30} />
      </div>
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={100}
          src={product!.image}
          height={100}
          className="rounded"
          alt={"product"}
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5 w-full flex flex-col mt-2">
        <a href="#">
          <h3 className="font-semibold text-xl tracking-tight text-gray-900">
            {product!.name} -{" "}
            <small className="text-sm">${product!.price}</small>
          </h3>
        </a>

        {/* Price and Add to Cart */}
        <div className="flex flex-col items-start justify-between">
          <span className="text-gray-900 dark:text-white">
            Cantidad: {quantity}
          </span>
          <span className="font-bold text-gray-900">
            Total: ${product!.price * quantity!}
          </span>
        </div>
      </div>

      <div className="flex p-5 items-center justify-center">
        <button
          onClick={onAddToCart}
          className="block border w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Add to Cart
        </button>
        <span className="text-2xl text-white mx-10">{quantity}</span>
        <button
          onClick={onAddToCart}
          className="block border w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Delete to cart
        </button>
      </div>
    </div>
  );
};
