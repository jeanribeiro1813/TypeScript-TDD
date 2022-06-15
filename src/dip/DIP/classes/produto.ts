import { Product } from "../interfaces/protocols/carItems";

export class Produto implements Product{
  constructor(public name:string, public price:number){}
}
