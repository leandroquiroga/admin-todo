"use client";
import { useContext } from "react";
import { products } from "../data";
import { Products } from "./Products";
import { UIContext } from "@/context";
import { CartProduct } from "@/shopping-cart/components/CartProduct";

import { ProductCookiesProps } from "../interfaces";

interface ProductCardProps {
  productInCartList: ProductCookiesProps[];
}
export const ProductCard = ({ productInCartList }: ProductCardProps) => {
  const { showCart } = useContext(UIContext);

  return (
    <div>
      {showCart ? (
        <>
          {productInCartList.map((product, index) => (
            <CartProduct key={index} {...product} />
          ))}
        </>
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
