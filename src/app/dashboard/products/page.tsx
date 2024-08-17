import { ProductCard } from "@/components";
import { products } from "@/products/data";
import { ProductInCartProps } from "@/products/interfaces";
import { CookiesCart } from "@/shopping-cart/actions/actions";
import { cookies } from "next/headers";

export const metadata = {
  title: "Product Page",
  description: "Product page",
};

const productInCart = (cart: CookiesCart): ProductInCartProps[] => {
  const productInCart: ProductInCartProps[] = [];

  // Recorremos el carrito y buscamos los productos correspondiente al id del producto
  for (const id of Object.keys(cart)) {
    const product = products.find((product) => product.id === id);

    //si el producto existe lo agregamos al arreglo del carrito
    if (product) {
      productInCart.push({ product, quantity: cart[id] });
    }
  }

  return productInCart;
};

export default function ProductPage() {
  const cookiesStore = cookies();
  const cart = JSON.parse(
    cookiesStore.get("cart")?.value ?? "{}"
  ) as CookiesCart;

  const productInCartList = productInCart(cart);

  return <ProductCard productInCartList={productInCartList} />;
}
