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
  product: ProductCardProps;
  quantity: number;
}