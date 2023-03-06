import { IItem } from "../../Interfaces/Data";
import { FormatterCurrency } from "../../Utils/General";
import { CardWrapper } from "./Styled";

type ComponentProps = {
  item: IItem;
};

export const BundleCardReleased = (props: ComponentProps) => {

  return (<div className="printedcard"><CardWrapper>
    <h3>
      <span>{props.item.Code}<br/><small>{props.item.Id}</small></span>
      <div>{FormatterCurrency.format(props.item.Price*props.item.Quantity)} (x{props.item.Quantity})</div>
    </h3>
    <div className="content">
      <ul>
        <li>{props.item.Description}</li>
        <li>{FormatterCurrency.format(props.item.Price)}</li>
        <hr/>
        {props.item.ItemType==="Single"?<li>Single Item</li>:
      <>
      <li>Multiple Items</li>
      <div>{FormatterCurrency.format(props.item.Price*props.item.Quantity)} (x{props.item.Quantity})</div>
      </>}
      </ul>
      {props.item.Childrens?<><h4>Subitems</h4>{props.item.Childrens.map((subitem:IItem) => (
        <BundleCardReleased item={subitem} key={subitem.Id}/>
      ))}</>:""}
    </div>
  </CardWrapper></div>);
}