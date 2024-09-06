export type AviableSizes = {
  count: number
  size: string
}
export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string,
  avaibleSizes: Array<AviableSizes>;
  image: string;
}

export interface Product {
  product: ProductCardProps;
}

export interface ProductInCartProps {
  product: ProductCookiesProps[];
}

export type ProductFilterdCookies = {
  id: string;
  name: string;
  price: number;
  image: string;
  producDescription: ProductCookiesProps[]
}

export type ProductCookiesProps = {
  id: string;
  quantity: number;
  sizeSelected: string;
  name: string;
  price: number;
  image: string;
};

export interface ProductCardProps {
  productInCartList?: ProductCookiesProps[];
}