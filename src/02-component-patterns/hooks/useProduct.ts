import { useState } from 'react';
import { useProductArgs } from '../interfaces/interfaces';

export const useProduct = ( { onChange, product }: useProductArgs ) => {
  const [counter, setCounter] = useState(0);
  const increaseBy = ( value: number ) => {

    const newValue = Math.max( counter + value, 0);

    setCounter( newValue );

    onChange && onChange( { count: newValue, product: product } );
  }

  return {
    counter,
    increaseBy
  }
}