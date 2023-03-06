import { Form, Formik, FormikConfig, FormikProps } from "formik";
import { useEffect, useRef, useState } from "react";
import { formGetInitialValues, formGetValidations, formGetValidationsById } from "../../Interfaces/FormFields";

export interface FormBoxProps{
  children: React.ReactNode;
  fields: string[];
  ids?: {[key: string]: string[];};
  onSubmit: FormikConfig<any>["onSubmit"];
};

export const FormBox = ({onSubmit, children,...props}: FormBoxProps) => {

  const formikRef = useRef<FormikProps<{[key: string]: string[]}> | null>(null);
  const InitialValues:{[key: string]: string[]} = formGetInitialValues(props.fields);
  const [ ValidationSchemas, setValidationSchemas ] = useState<any>(formGetValidations(props.fields));

  useEffect(()=>{
    const formik = formikRef.current;
    let newValues = {}
    let newSchemas = {}
    if (formik !== null) {
      for(let fields in InitialValues){
        if(props.ids && props.ids.hasOwnProperty(fields)) {
          props.ids[fields].forEach((key) => {
            newValues = {...newValues, [key]:(formik.values[fields] || formik.values[key]===undefined?InitialValues[fields]:formik.values[key])}
            newSchemas = {...newSchemas, [key]:fields }
          });
        } else{
          newValues = {...newValues, [fields]:formik.values[fields] }
          newSchemas = {...newSchemas, [fields]:fields }
        }
      }
      formik.setValues(newValues)
      setValidationSchemas(formGetValidationsById(newSchemas))
    }
  },[props.ids]);

  return (  
    <Formik
      innerRef={formikRef}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize={true}
      initialValues={InitialValues}
      validationSchema={ValidationSchemas}
      onSubmit={onSubmit}
    >
      <Form autoComplete="off">
        {children}
      </Form>
    </Formik>
  );
}