import { Order } from "./oder";
import { ShoppingProtocol } from "../interfaces/protocols/shopping";
import { Product } from "../interfaces/protocols/carItems";
import { MSGProtocols } from '../services/msg';
import { PersistencyProtocol } from '../services/persistence';
import { CustomerOrder } from '../interfaces/protocols/customesProtocols';
import { Discount, FiftyPercentDiscount } from "./discount";

class ShoppingCarMock implements ShoppingProtocol{

  public readonly _items:Product[] = []

  constructor(public readonly discount: Discount){}

  addItem(item:Product):void{}

  removeItems(index:number):void{}

  get items():Readonly<Product[]>{
    return []
  };
  total():number{
    return 0
  } ;
  totalWithDicount():number{
    return 0
  };
  isEmpty():boolean{
    return false
  };
  closed():void{};
}

class MenssaginMock implements MSGProtocols{
  sendMessage(msg: string): void {

  }
}

class PersistencyMock implements PersistencyProtocol{
  saveOrder():void{}
}

class CustomerMock implements CustomerOrder{
  getName(): string {
      return 'a'
  }

  getIDN(): string {
      return 'q'
  }
}



const makeSut = () => {

  const fify = new FiftyPercentDiscount()

  const shoppingMock = new ShoppingCarMock(fify)
  const mensagemMock = new MenssaginMock()
  const persistencyMock = new PersistencyMock()
  const customMock = new CustomerMock()

  const sut = new Order(shoppingMock,mensagemMock,persistencyMock,customMock)

  return {
    sut,
    shoppingMock,
    mensagemMock,
    persistencyMock,
    customMock
  }

}

describe('Order',()=>{

  it('Should not checkout if cart is empty',()=>{

    const { sut,  shoppingMock } = makeSut()

    const shoppingMockSpy = jest.spyOn(shoppingMock , 'isEmpty').mockReturnValueOnce(true)

    sut.checkout()

    expect(shoppingMockSpy).toHaveBeenCalledTimes(1)
    expect(sut.ordemStatus).toBe('open')


  })


  it('Should not checkout if cart is not empty',()=>{

    const { sut,  shoppingMock } = makeSut()

    const shoppingMockSpy = jest.spyOn(shoppingMock , 'isEmpty').mockReturnValueOnce(false)

    sut.checkout()

    expect(shoppingMockSpy).toHaveBeenCalledTimes(1)
    expect(sut.ordemStatus).toBe('close')


  })

  test('Should send an email to customer',()=>{

    const { sut,  mensagemMock } = makeSut()

    const mensagemMockSpy = jest.spyOn(mensagemMock , 'sendMessage')

    sut.checkout()

    expect(mensagemMockSpy).toHaveBeenCalledTimes(1)

  })
})
