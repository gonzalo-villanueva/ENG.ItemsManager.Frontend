import { TextField, TextFieldProps } from "@mui/material";
import { getIn, useField, useFormikContext } from "formik";
import { formGetFieldProps } from "../../Interfaces/FormFields";
import { FormFieldWrapper } from "./Styled";

type CustomTextFieldProps = TextFieldProps & {
  name: string;
  id?: string;
};

export const FormField = (props: CustomTextFieldProps) => {
  
  const [ field ] = useField(props.id?props.id:props.name);
  const { errors, touched } = useFormikContext();

  const fieldProps = formGetFieldProps(props.name);
  const fieldErrors = getIn(errors, props.id?props.id:props.name);
  const fieldTouched = getIn(touched, props.id?props.id:props.name);
  
  return (<FormFieldWrapper><TextField
    {...props}
    {...field}
    fullWidth={true}
    type={fieldProps.type}
    label={fieldProps.placeholder}
    error={fieldTouched && Boolean(fieldErrors)}
    helperText={fieldTouched && fieldErrors}
  /></FormFieldWrapper>);
}