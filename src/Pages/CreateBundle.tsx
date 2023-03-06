import { Button } from "@mui/material";
import { FormikHelpers } from "formik";
import { useContext } from "react";
import { FormBox } from "../Components/Forms/FormBox";
import { BundleCard } from "../Components/Elements/BundleCard";
import { ItemsContext } from "../Contexts/ItemsContext";
import { IItem } from "../Interfaces/Data";
import { FormatterCurrency } from "../Utils/General";
import { FormField } from "../Components/Forms/FormField";
import { ItemCardBundle } from "../Components/Elements/ItemCardBundle";
import { EmptyCard } from "../Components/Elements/EmptyCard";
import { Link } from "react-router-dom";

export const CreateBundle = () => {
    
  const { itemList, bundleList, BundleTotal, BundleIds, BundleAccept } = useContext(ItemsContext);

  const onSubmit = (values: any, helpers: FormikHelpers<any>) => {
    BundleAccept(values["BundleName"])
  };

  return (<>
    <div className="flex-1">
      <h1>Available Items</h1>
      {itemList.length>0?itemList.map((item:IItem) => (
        <ItemCardBundle item={item} key={item.Id}/>
      )):<EmptyCard>
      No items to display
      <Link to="/"><Button variant="contained" color="primary" type="submit">
            Create an Item
      </Button></Link>
    </EmptyCard>}
    </div>
    <div className="flex-1">
      <h1>Currently Bundled</h1>
      {bundleList.length>0?<>
        <FormBox fields={["BundleName","Quantity"]} ids={{"Quantity":BundleIds(bundleList)}} onSubmit={onSubmit}>

          <FormField name="BundleName" autoFocus/>
          {bundleList.map((item:IItem) => <BundleCard bundle={item} key={item.Id}/>)}

          <h4>{FormatterCurrency.format(BundleTotal(bundleList))}</h4>
          <Button variant="contained" color="primary" type="submit">
            Accept Bundle
          </Button>
        </FormBox>
      </>:<EmptyCard>
        No items to display
      </EmptyCard>}
    </div>
  </>);
}