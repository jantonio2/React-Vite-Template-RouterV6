import { useEffect, useRef, useState } from 'react';
import { useProductArgs } from '../interfaces/interfaces';

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value);  
  // const isMounted = useRef(false);

  console.log(initialValues?.count);

  const increaseBy = ( value: number ) => {

    const newValue = Math.max( counter + value, 0);
    setCounter( newValue );
    onChange && onChange( { count: newValue, product: product } );
  }
  
  // No funciona en strictmode
  // useEffect(() => {
  //   if (!isMounted.current) return;
  //   setCounter(value);
  // }, [value]);

  // useEffect(() => {
  //   isMounted.current = true;
  // }, []);

  useEffect(() => {
    setCounter(initialValues?.count || value);   
  }, [value]);
  

  return {
    counter, 
    increaseBy
  }
}