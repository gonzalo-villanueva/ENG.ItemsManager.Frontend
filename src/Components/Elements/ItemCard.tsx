import { Button } from "@mui/material";
import { useContext } from "react";
import { ItemsContext } from "../../Contexts/ItemsContext";
import { IItem } from "../../Interfaces/Data";
import { FormatterCurrency } from "../../Utils/General";
import { CardWrapper } from "./Styled";
type ComponentProps = {
  item: IItem;
};

export const ItemCard = ({item}: ComponentProps) => {

  const { ItemDelete } = useContext(ItemsContext);

  return (<CardWrapper>
    <h3>
      <span>{item.Code.toUpperCase()}<br/><small>{item.Id}</small></span>
      <Button variant="contained" color="error" onClick={()=>ItemDelete(item.Id,item.ParentId)} >
        Delete
      </Button>
    </h3>
    <div className="content">
      <ul>
        <li>{item.Description}</li>
        <li>{FormatterCurrency.format(item.Price)}</li>
        <hr/>
        <li>{item.ItemType}</li>
      </ul>
      {item.Childrens?<><h4>Subitems</h4>{item.Childrens.map((subitem:IItem) => (
        <ItemCard item={subitem} key={subitem.Id}/>
      ))}</>:""}
    </div>
  </CardWrapper>);
}