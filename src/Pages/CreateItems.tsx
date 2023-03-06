import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FormikHelpers } from "formik";
import { useContext, useState } from "react";
import { EmptyCard } from "../Components/Elements/EmptyCard";
import { ItemCard } from "../Components/Elements/ItemCard";
import { FormBox } from "../Components/Forms/FormBox";
import { FormField } from "../Components/Forms/FormField";
import { FormRadio } from "../Components/Forms/FormRadio";
import { ItemsContext } from "../Contexts/ItemsContext";
import { IItem } from "../Interfaces/Data";

const FormRequiredFields = ["Code", "Description", "Price", "Order", "ItemType"];

export const CreateItems = () => {
  
  const { itemList, ItemSave } = useContext(ItemsContext);
  const [ ParentItem, setParentItem ] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setParentItem(event.target.value as string);
  };

  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    ItemSave(values, ParentItem);
    setParentItem('');
    resetForm();
  };

  return (<>
    <div className="flex-1">
      <h1>Create Item</h1>
      <FormBox fields={FormRequiredFields} onSubmit={onSubmit}>
        <FormField name="Code" autoFocus/>
        <FormField name="Description" multiline minRows={3} maxRows={10}/>
        <FormField name="Price"/>
        <FormRadio name="ItemType" row/>
        <FormField name="Order"/>
        
        <FormControl fullWidth>
          <InputLabel id="ParentListLabel">Parent Item</InputLabel>
          <Select
            labelId="ParentListLabel"
            id="ParentList"
            value={ParentItem}
            label="Parent Item"
            disabled={itemList?false:true}
            onChange={handleChange}
          >
          <MenuItem value={""}>Empty</MenuItem>
            {itemList.length>0?itemList.map((item:IItem) => (
            <MenuItem value={item.Id} key={item.Id}>{item.Code.toUpperCase()} <small> &gt; ID:{item.Id}</small></MenuItem>
          )):""}
          </Select>
        </FormControl>
        <br/>
        <br/>
        <Button variant="contained" color="primary" type="submit">
          Create Item
        </Button>
      </FormBox>
    </div>
    <div className="flex-1">
      <h1>Item List</h1>
      {itemList.length>0?itemList.map((item:IItem) => (
        <ItemCard item={item} key={item.Id}/>
      )):<EmptyCard>
        No items to display
      </EmptyCard>}
    </div>
  </>);
};