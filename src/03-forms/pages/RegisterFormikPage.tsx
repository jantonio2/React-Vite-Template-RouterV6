import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {


  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={( values ) => {
          console.log( values )
        }}
        validationSchema={
          Yup.object(
            {
              name: Yup.string()
                          .min(2, 'Must be 2 characters or more')
                          .max(15, 'Must be 15 characters or less')
                          .required('Required'),
              email: Yup.string()
                         .email('Invalid email address')
                         .required('Required'),
              password1: Yup.string()
                               .min(6, 'Must be 6 characters or more')
                               .required('Required'),
              password2: Yup.string()
                              //  .equals([ Yup.ref('password1') ], 'Must be same to the password above')
                               .oneOf([ Yup.ref('password1') ], 'Passwords are not equals')
                               .required('Required')
            }
          )
        }        
      >
        {
          ({ handleReset }) => (
            <Form>
              <MyTextInput 
                label='Name' 
                name='name'
                placeholder='Antonio Rocha'
              />
              
              <MyTextInput 
                label='Email' 
                name='email'
                placeholder='antonio@gmail.com'
                type='email'
                />

              <MyTextInput 
                label='Password' 
                name='password1'
                placeholder='******'
                type='password'
                />

              <MyTextInput 
                label='Repeat Password' 
                name='password2'
                placeholder='******'
                type='password'
              />

              <button type="submit">Submit</button> 
              <button type="button" onClick={ handleReset }>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
