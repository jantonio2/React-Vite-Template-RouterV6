import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';
import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={( values ) => {
          console.log( values )
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string()
                             .max(15, 'Must be 15 characters or less')
                             .required('Required'),
            lastName: Yup.string()
                            .max(10, 'Must be 10 characters or less')
                            .required('Required'),
            email: Yup.string()
                       .email('Invalid email address')
                       .required('Required'),
            terms: Yup.boolean()
                        .oneOf([true], 'Must accept terms and conditions'),
            jobType: Yup.string()
                        .notOneOf(['it-jr'], 'This option is not allowed')
                        .required('Required')
          })
        }
      >
        {
          (formik) => (
            <Form>
              <MyTextInput 
                label='First Name' 
                name='firstName'
                placeholder='Antonio'
              />
              
              <MyTextInput 
                label='Last Name' 
                name='lastName'
                placeholder='Rocha'
              />

              <MyTextInput 
                label='Email Addres' 
                name='email'
                placeholder='antonio@gmail.com'
                type='email'
              />
              
              <label htmlFor="jobType">Job Type</label>
              <Field name='jobType' as='select'>
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Junior</option>
              </Field>
              <ErrorMessage name='jobType' component='span' />

              <label>
                <Field name='terms' type='checkbox' />
                Terms and conditions
              </label>
              <ErrorMessage name='terms' component='span' />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>

      
    </div>
  );
}
