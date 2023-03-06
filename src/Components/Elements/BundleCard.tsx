import { Button } from "@mui/material";
import { useContext } from "react";
import { ItemsContext } from "../../Contexts/ItemsContext";
import { IBundle, IItem } from "../../Interfaces/Data";
import { FormatterCurrency } from "../../Utils/General";
import { CardWrapper } from "./Styled";
import { FormField } from "../Forms/FormField";
import { FormButtonsWrapper } from "../Forms/Styled";

type ComponentProps = {
  bundle: IBundle;
};

export const BundleCard = ({bundle}: ComponentProps) => {

  const { setBundleList, BundleDelete, BundleUpdate } = useContext(ItemsContext);

  const handleChange = (e:any) => {
    setBundleList(BundleUpdate(e.target.id, "Quantity", e.target.value ));
    e.preventDefault();
  }

  return (<CardWrapper>
    <h3>
      <span>{bundle.Code.toUpperCase()}<br/><small>{bundle.Id}</small></span>
      {bundle.ParentId?<></>:<Button variant="contained" color="error" size="small" onClick={()=>BundleDelete(bundle.Id)} >
        Delete
      </Button>}
    </h3>
    <div className="content">
      <ul>
        <li>{bundle.Description}</li>
        <li>{FormatterCurrency.format(bundle.Price)}</li>
        <hr/>
        {bundle.ItemType==="Single"?<li>Single Item</li>:<></>}
      </ul>
      {bundle.ItemType==='Multiple'?<FormButtonsWrapper>
        <FormField name="Quantity" autoFocus id={bundle.Id} size="small" onChangeCapture={handleChange}
          label="width: 150px"
          sx={{ width: 150 }}
          InputProps={{ inputProps: { min: 1 } }}
        />
        <span>{FormatterCurrency.format(bundle.Price*bundle.Quantity)}</span>
      </FormButtonsWrapper>:<></>}
      {bundle.Childrens?<><h4>Subitems</h4>{bundle.Childrens.map((subbundle:IItem) => (
        <BundleCard bundle={subbundle} key={subbundle.Id}/>
      ))}</>:""}
    </div>
  </CardWrapper>);
}