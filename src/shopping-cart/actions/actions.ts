import { getCookie, hasCookie, setCookie } from "cookies-next";


export interface CookiesCart {
  [key: string]: number;
}

export const getCookiesCart = (): CookiesCart => {

  // Verificamos que la cookie 'cart' exista para retornar un objeto con el id del producto y la cantidad
  if (hasCookie('cart')) return JSON.parse(getCookie('cart') as string ?? '{}');

  return {};
}



export const addProductToCart = (id: string): void => {

  // Obtenemos la cookie
  const cookieCart = getCookiesCart();

  // Verificamos si el producto ya existe en la cookie, si existe incrementamos la cantidad
  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  };

  // Guardamos la cookie
  setCookie('cart', JSON.stringify(cookieCart));

};