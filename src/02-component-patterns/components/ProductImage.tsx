import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage  from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductImageProps } from '../interfaces/interfaces';

export const ProductImage = ({ img = '', className }: ProductImageProps) => {

  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if( img ) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img className={ `${styles.productImg} ${className}` } src={ imgToShow } alt="Product image" />
  );
}