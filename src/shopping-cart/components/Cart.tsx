"use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import {
//   CiAirportSign1,
//   CiCircleChevLeft,
//   CiLocationArrow1,
// } from "react-icons/ci";
// import { CartProduct } from "./CartProduct";

// export const Cart = ({ setShowCart, showCart }: CartProps) => {
//   const [isHidden, setIsHidden] = useState(false);
//   const [flag3, setFlag3] = useState(false);

//
//
//
//

//   const toggleCheckout = () => {
//     const checkout = document.getElementById("checkout");
//     const checdiv = document.getElementById("chec-div");

//     if (!flag3) {
//       checkout?.classList.add("translate-x-full");
//       checkout?.classList.remove("translate-x-0");
//       setTimeout(() => {
//         setIsHidden(true);
//         checdiv?.classList.add("hidden");
//       }, 1000);
//       setFlag3(true);
//     } else {
//       setTimeout(() => {
//         checkout?.classList.remove("translate-x-full");
//         checkout?.classList.add("translate-x-0");
//       }, 1000);
//       setIsHidden(false);
//       checdiv?.classList.remove("hidden");
//       setFlag3(false);
//     }
//   };

//   return (
//     <div
//       className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-50 top-0 overflow-y-auto overflow-x-auto fixed sticky-0"
//       id="chec-div">
//       <div
//         className="w-screen absolute z-auto right-0 h-screen overflow-x-hidden transform translate-x-0"
//         id="checkout">
//         <div
//           className="flex items-end sm:flex-col lg:flex-col flex-row justify-center"
//           id="cart">
//           <div
//             className="w-full p-8 bg-white dark:bg-gray-800 overflow-y-scroll overflow-x-hidden lg:h-screen h-auto"
//             id="scroll">
//
//
//
//
//
//             <CartProduct />
//             <CartProduct />
//           </div>
//           <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
//             <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
//               <div>
//                 <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
//                   Summary
//                 </p>
//                 <div className="flex items-center justify-between pt-16">
//                   <p className="text-base leading-none text-gray-800 dark:text-white">
//                     Subtotal
//                   </p>
//                   <p className="text-base leading-none text-gray-800 dark:text-white">
//                     ,000
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between pt-5">
//                   <p className="text-base leading-none text-gray-800 dark:text-white">
//                     Shipping
//                   </p>
//                   <p className="text-base leading-none text-gray-800 dark:text-white" />
//                 </div>
//                 <div className="flex items-center justify-between pt-5">
//                   <p className="text-base leading-none text-gray-800 dark:text-white">
//                     Tax
//                   </p>
//                   <p className="text-base leading-none text-gray-800 dark:text-white" />
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
//                   <p className="text-2xl leading-normal text-gray-800 dark:text-white">
//                     Total
//                   </p>
//                   <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
//                     ,240
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {}}
//                   className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">
//                   Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import Image from "next/image";

import {} from "../actions/actions";

import { useRouter } from "next/navigation";
import { ProductCardProps } from "@/products/interfaces";
import { CiCircleChevLeft } from "react-icons/ci";

interface Props {
  product: ProductCardProps;
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

  console.log(product);
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
