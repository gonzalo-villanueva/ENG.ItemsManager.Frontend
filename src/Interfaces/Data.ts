/// Items Interface
export interface IItem{
  Id: string;
  Code: string;
  Description: string;
  Price: number;
  Order: number;
  Quantity: number;
  ItemType: string;
  Childrens?: IItem[]
  ParentId?: string;
}

export interface IBundle{
  Id: string;
  Code: string;
  Description: string;
  ItemType: string;
  Price: number;
  Quantity: number;
  ParentId?: string;
  Childrens?: IItem[];
}


export interface IReleasedBundle{
  Id: string;
  Name: string;
  Total: number;
  Bundle: IBundle;
}