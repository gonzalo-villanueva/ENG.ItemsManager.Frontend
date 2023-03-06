import * as yup from 'yup';

interface FieldProps {
    [key: string]: {
        type: string;
        defaultvalue?: any;
        label?: string;
        placeholder: string;
        validations: any;
    }
}

export const FormFields:FieldProps = {

    Default:{
        type: 'string',
        defaultvalue: '',
        label:'Invalid',
        placeholder: 'Invalid Field Name',
        validations: yup.string()
    },


    Code:{
        type: 'string',
        defaultvalue: '',
        label: 'Code',
        placeholder: 'Code',
        validations: yup.string().required("This field is required").max(14, "The code should not have more than 14 characters")
    },

    Description:{
        type: 'string',
        defaultvalue: '',
        label: 'Description',
        placeholder: 'Description',
        validations: yup.string().required("This field is required")
    },

    Price:{
        
        type: 'number',
        defaultvalue: '',
        label: 'Price',
        placeholder: 'Price',
        validations: yup.mixed()
        .required("This field is required")
        .test("is-number", "The price must be a number", (value:any) => !isNaN(parseFloat(value)))
        .transform((value, originalValue) => parseFloat(originalValue).toFixed(2))
        .test("is-greater-than-zero", "The price must be greater than or equal to zero", (value:any) => parseFloat(value) >= 0)
    },

    Order:{
        type: 'number',
        defaultvalue: '',
        label: 'Order',
        placeholder: 'Item Order',
        validations: yup.number().min(0, "The order must be greater than or equal to zero")
    },

    ItemType:{
        type: 'radio',
        defaultvalue: 'Single',
        label: 'Item type',
        placeholder: 'Insert item type',
        validations: yup.string().required("This field is required")
    },
    

    BundleName:{
        type: 'string',
        defaultvalue: 'TEST',
        label: 'Bundle Name',
        placeholder: 'Bundle Name',
        validations: yup.string().required("This field is required").max(14, "The code should not have more than 14 characters")
    },

    Quantity:{
        type: 'number',
        defaultvalue: 1,
        label: 'Quantity',
        placeholder: 'Item Quantity',
        validations: yup.number().min(1, "The order must be greater than or equal to one")
    },

}

export const formGetFieldProps = (field:string) => FormFields[field] ?? FormFields['Default']
export const formGetValidations = (fields:string[]) => yup.object(fields.reduce((a, v) => ({ ...a, [v]: formGetFieldProps(v).validations}), {}));

export const formGetValidationsById = (fields: {[key: string]: string}) => yup.object(Object.entries(fields).reduce((a, [key, value]) => ({...a, [key]: formGetFieldProps(value).validations }), {}));

export const formGetInitialValues = (fields:string[]) => fields.reduce((a, v) => ({ ...a, [v]: formGetFieldProps(v).defaultvalue}), {});
export const formGetTypes = (fields:string[]) => fields.reduce((a, v) => ({ ...a, [v]: formGetFieldProps(v).type}), {});
