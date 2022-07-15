import { CSSProperties, ReactElement } from 'react';

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: ( value: number ) => void;
  product: Product;
}

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface ProductTitleProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export interface ProductImageProps {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}