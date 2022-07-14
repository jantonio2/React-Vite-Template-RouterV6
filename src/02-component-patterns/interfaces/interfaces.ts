import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: ( value: number ) => void;
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: ({ className }: { className?: string }) => JSX.Element;
}

export interface ProductTitleProps {
  title?: string;
  className?: string;
}

export interface ProductImageProps {
  img?: string;
  className?: string
}