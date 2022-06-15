import { ShoppingCarLegacy } from "./shopping-car-com SRP";
import { OrderStatus } from "../interfaces/protocols/orderStatus";
import { Menssagin } from '../services/msg';
import { Persistency } from '../services/persistence';
import { CustomerOrder } from '../interfaces/protocols/customesProtocols';

export class Order{
  private _ordemStatus : OrderStatus = 'open'



  constructor(
     private readonly cart:ShoppingCarLegacy,
     private readonly message:Menssagin,
     private readonly persistency:Persistency,
     private readonly  customer:CustomerOrder
     ){  }

  get ordemStatus(): OrderStatus{
    return this._ordemStatus
  }

  checkout():void{

    if(this.cart.isEmpty()){
      console.log('Seu carrinho esta vazio');
      return;
    }

    this._ordemStatus = 'close'

    this.message.sendMessage('Seu pedido esta sendo processado com o valor: ' + this.cart.totalWithDicount())
    this.persistency.saveOrder()
    this.cart.closed()

    console.log(`O Cliente é: `+ this.customer.getName(),this.customer.getIDN())
  }



}
