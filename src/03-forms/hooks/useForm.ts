import { ChangeEvent, useState } from 'react';

export const useForm = <T>( initState: T ) => {

  const [formData, setFormData] = useState(initState);

  const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    
    setFormData( oldFormData => ({
      ...oldFormData,
      [event.target.name]: event.target.value      
    }))
  }

  return {
    ...formData,
    onChange,
    formData
  }
}