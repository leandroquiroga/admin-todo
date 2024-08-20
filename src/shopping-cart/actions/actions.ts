
import { products } from "@/products/data";
import { ProductCookiesProps } from "@/products/interfaces";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { cookies } from 'next/headers';


export interface CookiesCart {
  [key: string]: ProductCookiesProps[];
}

export const getCookiesCart = (): CookiesCart => {

  // Verificamos que la cookie 'cart' exista para retornar un objeto con el id del producto y la cantidad
  if (hasCookie('cart')) return JSON.parse(getCookie('cart') as string ?? '{}');
  return {};
}

export const addProductToCart = (id: string, sizeSelected: string): void => {
  const cookieCart = getCookiesCart();

  if (!cookieCart[id]) {
    cookieCart[id] = [];
  };

  // Buscamos el producto con el id correspondiente
  const findProduct = products.find((product) => product.id === id);

  // Si el producto existe, lo agregamos al carrito con la cantidad correspondiente y el talle seleccionado
  if (findProduct) {
    const { name, price, image } = findProduct;
    const existingProductIndex = cookieCart[id].findIndex((item: { sizeSelected: string }) => item.sizeSelected === sizeSelected);
    existingProductIndex !== -1
      ? cookieCart[id][existingProductIndex].quantity += 1
      : cookieCart[id].push({ id, image, name, price, sizeSelected, quantity: 1 });
  }

  // Seteamos el carrito
  setCookie('cart', JSON.stringify(cookieCart));
};


export const removeProductFromCart = (id: string, sizeSelected: string): void => {
  const cookieCart = getCookiesCart() as CookiesCart;

  // Verificar si existe el id y encontrar el índice del producto con el talle específico
  const existingProductIndex = cookieCart[id]?.findIndex((item: { sizeSelected: string }) => item.sizeSelected === sizeSelected);

  if (existingProductIndex !== undefined && existingProductIndex !== -1) {
    // Eliminar el producto específico usando splice, sin dejar null
    cookieCart[id].splice(existingProductIndex, 1);

    // Si no quedan productos de ese id, eliminamos la entrada completa
    if (cookieCart[id].length === 0) {
      delete cookieCart[id];
    }

    // Actualizar la cookie con el carrito modificado
    setCookie('cart', JSON.stringify(cookieCart));
  }
};


export const removeAllProduct = () => {

  // Actualizar la cookie con el carrito modificado
  setCookie('cart', JSON.stringify({}));
}