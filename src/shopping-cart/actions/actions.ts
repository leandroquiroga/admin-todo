
import { products } from "@/products/data";
import { ProductCookiesProps } from "@/utils/features/products/interfaces";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { revalidatePath } from "next/cache";


export interface CookiesCart {
  [key: string]: ProductCookiesProps[];
}

// Obtenemos el carrito de compras
export const getCookiesCart = (): CookiesCart => {

  // Verificamos que la cookie 'cart' exista para retornar un objeto con el id del producto y la cantidad
  if (hasCookie('cart')) return JSON.parse(getCookie('cart') as string ?? '{}');
  return {};
}

// Agregamos un producto al carrito
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

// Eliminamos un producto del mismo talle del carrito
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

// Eliminar todos los productos del carrito
export const removeAllProduct = () => setCookie('cart', JSON.stringify({}));


// Eliminar un solo producto del carrito
export const removeOneProduct = (id: string, sizeSelected: string) => {
  const cookieCart = getCookiesCart();

  if (!cookieCart[id]) {
    cookieCart[id] = [];
  };

  const existingProductIndex = cookieCart[id].findIndex((item: { sizeSelected: string }) => item.sizeSelected === sizeSelected);
  if (existingProductIndex !== -1)
    cookieCart[id][existingProductIndex].quantity = cookieCart[id][existingProductIndex].quantity - 1;

  // Seteamos el carrito
  setCookie('cart', JSON.stringify(cookieCart));
}