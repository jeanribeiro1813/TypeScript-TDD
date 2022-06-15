import { Product } from "./carItems";

export interface ShoppingProtocol{
  addItem(item:Product):void;
  removeItems(index:number):void;
  items:Readonly<Product[]>;
  total():number ;
  totalWithDicount():number;
  isEmpty():boolean;
  closed():void;

}
