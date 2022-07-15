import { useEffect, useState } from 'react';
import { useProductArgs } from '../interfaces/interfaces';

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = ( value: number ) => {

    const newValue = Math.max( counter + value, 0);
    setCounter( newValue );
    onChange && onChange( { count: newValue, product: product } );
  }

  useEffect(() => {
    
    setCounter( value );

  }, [value])
  

  return {
    counter, 
    increaseBy
  }
}