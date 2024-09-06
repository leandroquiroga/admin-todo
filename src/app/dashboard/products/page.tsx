import { ProductCard } from "@/components";
import { ProductCookiesProps } from "@/utils/features/products/interfaces";
import { CookiesCart } from "@/shopping-cart/actions/actions";
import { cookies } from "next/headers";

export const metadata = {
  title: "Product Page",
  description: "Product page",
};

const productInCart = (cart: CookiesCart): ProductCookiesProps[] => {
  // Recorremos el carrito y buscamos los productos correspondiente al id del producto

  return Object.values(cart)
    .flatMap((product) => Object.values(product))
    .map((product) => product);
};

export default function ProductPage() {
  const cookiesStore = cookies();
  const cart = JSON.parse(
    cookiesStore.get("cart")?.value ?? "{}"
  ) as CookiesCart;

  const productInCartList = productInCart(cart);

  return <ProductCard productInCartList={productInCartList} id={""} name={""} price={0} description={""} avaibleSizes={[]} image={""} />;
}
