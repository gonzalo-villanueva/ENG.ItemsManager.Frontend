import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmptyCard } from "../Components/Elements/EmptyCard";
import { ItemsContext } from "../Contexts/ItemsContext";
import { ReleasedList } from "../Components/Elements/ReleasedList";

export const ReleasedBundles = () => {

  const { releasedbundleList, BundleGet } = useContext(ItemsContext);

  useEffect(BundleGet,[])
  
  return (<>
    <div className="flex-1" >
      <h1>Realead Bundles</h1>
      {releasedbundleList.length>0?<>
        {releasedbundleList.map((item:any) => <ReleasedList item={item} key={item.Id}/>)}
      </>:<EmptyCard>
        No bundles to display
        <Link to="/bundles/"><Button variant="contained" color="secondary" type="submit">
          Create a Bundle
        </Button></Link>
      </EmptyCard>}
    </div>
  </>);
}