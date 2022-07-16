import { createContext, ReactElement, useContext, useDebugValue, useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } );

  return (
    <Provider value={{
      counter,
      increaseBy,
      maxCount,
      product
    }}>
      <div className={ `${styles.productCard} ${className}` } style={ style }>
        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          })
        }
      </div>
    </Provider>
  );
}
