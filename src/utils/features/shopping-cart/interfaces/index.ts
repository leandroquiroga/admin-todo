import { ProductCardProps, ProductCookiesProps } from "@/utils/features/products/interfaces";

export interface PropsCart {
  product?: ProductCardProps;
  quantity?: number;
}

export interface ShoppingCartProps {
  totalItems: number;
}

export interface CheackoutProps {
  items: ProductCookiesProps[];
  labelButton: string;
}
