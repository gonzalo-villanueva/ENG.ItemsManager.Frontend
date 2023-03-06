import { FormControlLabel, FormLabel, Radio, RadioGroup, RadioGroupProps } from "@mui/material";
import { useField } from "formik";
import { formGetFieldProps } from "../../Interfaces/FormFields";
import { FormRadioWrapper } from "./Styled";

type CustomTextFieldProps = RadioGroupProps & {
  name: string;
};

export const FormRadio = (props: CustomTextFieldProps) => {

  const [ field ] = useField(props.name);
  const fieldProps = formGetFieldProps(props.name);
  
  return (<FormRadioWrapper>
    <FormLabel id="demo-radio-buttons-group-label">{fieldProps.label}:</FormLabel>
    <RadioGroup 
      {...props}
      {...field}
    >
      <FormControlLabel value="Single" control={<Radio />} label="Single" />
      <FormControlLabel value="Multiple" control={<Radio />} label="Multiple" />
    </RadioGroup>
  </FormRadioWrapper>);
}