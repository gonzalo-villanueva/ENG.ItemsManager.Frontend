import { Button } from "@mui/material";
import { useContext, useRef } from "react";
import { ItemsContext } from "../../Contexts/ItemsContext";
import { FormatterCurrency } from "../../Utils/General";
import { BundleCardReleased } from "./BundleCardReleased";
import { useReactToPrint } from 'react-to-print';

type ComponentProps = {
    item: any;
  };
  
export const ReleasedList = ({item}: ComponentProps) => {

  const { BundleRemove } = useContext(ItemsContext);
  
  const componentRef:any = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    bodyClass: "printpage"
  });

  return (<div>
    <h2>
      <span className="flex-1"><strong>{item.Name}</strong></span>
      <span>Total: {FormatterCurrency.format(item.Total)}</span>
      <Button variant="contained" color="primary" size="small"  onClick={()=>handlePrint()}>
        Print
      </Button>
      <Button variant="contained" color="error" size="small"  onClick={()=>BundleRemove(item.Id)}>
        Delete
      </Button>
    </h2>
    <div ref={componentRef}>
      <h1 className="printme"><strong>{item.Name}</strong></h1>
      <h2 className="printme">Total: {FormatterCurrency.format(item.Total)}</h2>
      {item.list.map((bundle:any) => <BundleCardReleased item={bundle} key={bundle.Id}/>)}
    </div>
  </div>);
}