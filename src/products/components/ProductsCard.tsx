import { products } from "../data";
import { Products } from "./Products";

export const ProductCard = () => {
  return (
    <>
      {
        products.map((product) => (
          <Products key={product.id} product={product} />
        ))
      }
    </>
  )
};
