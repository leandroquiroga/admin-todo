"use client";
import { useContext } from "react";
import { products } from "../data";
import { Products } from "./Products";
import { UIContext } from "@/context";
import { CartProduct } from "@/shopping-cart/components/CartProduct";

import { ProductCardProps } from "../../utils/features/products/interfaces";
import { removeAllProduct } from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";
import { Cheackout } from "@/shopping-cart/components/Cheackout";

export const ProductCard = ({ productInCartList }: ProductCardProps) => {
  const { showCart } = useContext(UIContext);
  const router = useRouter();

  const removeAllProducts = () => {
    removeAllProduct();
    router.refresh();
  };

  return (
    <div>
      {showCart ? (
        <div className="flex flex-col">
          <button
            className="cursor-pointer text-sm hover:text-gray-500"
            onClick={removeAllProducts}>
            Limpiar carrito
          </button>
          {productInCartList!.map((product, index) => (
            <CartProduct key={index} {...product} />
          ))}
          <Cheackout items={productInCartList!} labelButton={"Comprar"} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem] ">
          {products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
