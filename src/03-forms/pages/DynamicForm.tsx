import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredField: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[ input.name ] = input.value;

  if( !input.validations ) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if ( rule.type === 'required' ){
      schema = schema.required('Required');
    }

    if( rule.type === 'minLength' ){
      schema = schema.min( ( rule as any ).value || 2, `Must be ${ ( rule as any ).value || 2 } characters or more` );
    }

    if( rule.type === 'email' ){
      schema = schema.email( 'Invalid email address' );
    }
  }

  requiredField[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredField });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        onSubmit={ (values) => {
          console.log(values)
        } }
        validationSchema = { validationSchema }
      >
        {
          (formik) => (
            <Form>
              { formJson.map( ({ type, name, placeholder, label, options }) => {

                if( type === 'input' || type === 'password' || type === 'email' ) {
                  return <MyTextInput 
                    key={ name }
                    type={ type as any } 
                    name={ name } 
                    label={ label } 
                    placeholder={ placeholder } 
                  />
                } else if ( type === 'select' ){
                  return (
                    <MySelect key={ name } label={ label } name={ name }>
                      <option value="">Select an option</option>
                      {
                        options?.map( ({ id, label }) => (
                          <option key={ id } value={ id } >{ label }</option>
                        ))
                      }
                    </MySelect>
                  );
                }

                throw new Error(`El type: ${ type } no es soportado`);

              }) }

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}
