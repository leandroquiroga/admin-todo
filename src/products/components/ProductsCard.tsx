"use client";
import { useContext } from "react";
import { products } from "../data";
import { Products } from "./Products";
import { UIContext } from "@/context";
import { CartProduct } from "@/shopping-cart/components/CartProduct";

import styles from "./shoppingCart.module.css";
import { ProductInCartProps } from "../interfaces";

interface ProductCardProps {
  productInCartList: ProductInCartProps[];
}
export const ProductCard = ({ productInCartList }: ProductCardProps) => {
  const { showCart } = useContext(UIContext);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem] ">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
      <div
        className={`${
          showCart ? styles.cartOpen : styles.cartClose
        } relative mt-10 w-full md:w-1/3 `}>
        {productInCartList.map(({ product, quantity }) => (
          <CartProduct key={product.id} product={product} quantity={quantity} />
        ))}
      </div>
    </>
  );
};
