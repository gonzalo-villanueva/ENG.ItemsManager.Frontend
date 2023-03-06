import { createContext, useState } from "react";
import { IItem } from "../Interfaces/Data";

import { v4 as uuidv4 } from 'uuid';
import { MockupData } from "../Data/MockupData";
import { addLSData, getLSData, setLSData } from "../Utils/General";


const ContextValues = () => {

  const [ItemList, setItemList] = useState<IItem[]>([]); // user MockupData for testing
  const [BundleList, setBundleList] = useState<IItem[]>([]);
  const [ReleasedBundleList, setReleasedBundleList] = useState<{Id:string;list:IItem[];Total:number;}[]>([]);

  const ItemSave = (item:IItem, parent?:string) => {
    let newitem = {...item, Id:uuidv4(), Quantity: 1}
    if(parent){
      newitem = {...newitem, ParentId: parent}

      setItemList(itemList => (itemList ?? []).map(obj => {
        if (obj.Id === parent) {
          return {
            ...obj,
            Childrens: obj.Childrens ? [...obj.Childrens, newitem] : [newitem]
          }
        }
        return obj;
      }));
    } else{
      setItemList(ItemList ? [...ItemList, newitem] : [newitem]);
    }
  }

  const ItemDelete = (itemId:string, parent?:string) => {
    if(parent){
      setItemList(itemList => (itemList ?? []).map(obj => {
        if (obj.Id === parent) {
          return {
            ...obj,
            Childrens: (obj.Childrens ?? []).filter(Child => Child.Id !== itemId)
          };
        }
        return obj;
      }));
    } else{
      setItemList(itemList => (itemList ?? []).filter(obj => obj.Id !== itemId));
    }
  }

  const BundleSave = (item:IItem) => {
    let newitem = {...item, Id:uuidv4()}
      setBundleList(BundleList ? [...BundleList, newitem] : [newitem]);
  }

  const BundleDelete = (itemId:string) => {
    setBundleList(bundleList => (bundleList ?? []).filter(obj => obj.Id !== itemId));
  }

  const BundleTotal = (items:IItem[]):any => {

    const total = items.reduce((accumulator, item) => {
      let sum = accumulator + item.Price*item.Quantity;
      if (item.Childrens && item.Childrens.length > 0) {
        sum += BundleTotal(item.Childrens)
      }
      return sum;
    }, 0);

    return total;
  }

  const BundleIds = (items: IItem[]): string[] => {
    let ids: string[] = [];
  
    items.forEach(item => {
      ids.push(item.Id);
  
      if (item.Childrens && item.Childrens.length > 0) {
        ids = ids.concat(BundleIds(item.Childrens));
      }
    });
  
    return ids;
  }

  const BundleUpdate = (itemId: string, attribute: keyof IItem, newValue: string | number, items?: IItem[]): IItem[] => {
    let iterablelist = items?items:BundleList;
    const updatedItems = iterablelist.map((item) => {
      if (item.Id === itemId) {
        return {...item, [attribute]: newValue};
      } else if (item.Childrens) {
        return {...item, Childrens: BundleUpdate(itemId, attribute, newValue, item.Childrens) };
      } else {
        return item;
      }
    });
    // Devuelve la lista de IItem actualizada
    return updatedItems;
  }

  const BundleAccept = (bundleName:string) =>{
    let newBundle = {Id:uuidv4(), Name:bundleName, list: BundleList, Total: BundleTotal(BundleList)}
    addLSData('ReleasedBundles', newBundle)
    setBundleList([]);
  }

  const BundleRemove = (bundleId:string) =>{
    const olddata = getLSData('ReleasedBundles');
    const newdata = olddata.filter((e:any)=>e.Id !== bundleId);
    setReleasedBundleList(newdata);
    setLSData('ReleasedBundles', newdata);
  }

  const BundleGet = ()=>{
    const data = getLSData('ReleasedBundles');  
    setReleasedBundleList(data || []);
  }

  const BundlePrint = (bundleId:string) =>{ 
    console.log(ReleasedBundleList.filter((e:any)=>e.Id === bundleId));
/*
    var content = document.getElementById("divcontents");
    var pri = document.getElementById("ifmcontentstoprint")?.contentEditable;
    if(pri){
      pri.document.open();
      pri.document.write(content.innerHTML);
      pri.document.close();
      pri.focus();
      pri.print();
    }*/

  }


  return {
    itemList: ItemList, bundleList: BundleList, releasedbundleList: ReleasedBundleList,
    ItemSave, ItemDelete,
    setBundleList,
    BundleSave, BundleDelete, BundleTotal, BundleIds, BundleUpdate, BundleAccept,
    BundleGet, BundleRemove, BundlePrint
  }
}

export const ItemsContext = createContext({} as ReturnType<typeof ContextValues>);

export interface ContextProps{
  children: React.ReactNode;
};
  
export const ItemsContextProvider = ({children, ...props}: ContextProps) => {
  return (
    <ItemsContext.Provider value={ContextValues()}>
      {children}
    </ItemsContext.Provider>
  );
}