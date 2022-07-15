import { createContext, ReactElement, useContext, useDebugValue, useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export const ProductCard = ({ children, product, className, style, onChange }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct( { onChange, product } );

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ `${styles.productCard} ${className}` } style={ style }>
        { children }
      </div>
    </Provider>
  );
}
