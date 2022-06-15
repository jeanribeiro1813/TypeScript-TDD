import {ShoppingCarLegacy} from  './shopping-car-com SRP'
import { Discount } from './discount';
import { Product } from '../interfaces/protocols/carItems';

const createSut = () =>{

  const discountMock =  createDiscountMock()

  const sut = new ShoppingCarLegacy(discountMock)

  return {sut,discountMock}

}

const createDiscountMock = () =>{
  class DiscountMock extends Discount{}

  return new DiscountMock()
}

const createCarItems = (name:string,price:number) =>{
  class CarItemMock implements Product{
    constructor(public name : string, public price:number){}
  }

  return new CarItemMock(name,price)
}


describe('Shopping Car',()=>{

  test('Should be an empty car when no product is added' ,() =>{

    const {sut} = createSut()

    expect(sut.isEmpty()).toBe(true)
  })

  test('Should have 2 car items' ,() =>{

    const {sut} = createSut()

    sut.addItem({name:'Camiseta', price:44})
    sut.addItem({name:'Calça', price:46})

    expect(sut.items.length).toBe(2)


  })

  test('Should have products and clear car items' ,() =>{

    const {sut} = createSut()

    sut.addItem({name:'Camiseta', price:44})
    sut.addItem({name:'Calça', price:46})

    expect(sut.items.length).toBe(2)
    sut.closed()
    expect(sut.items.length).toBe(0)
    expect(sut.isEmpty()).toBe(true)



  })

  test('Should remove items' ,() =>{

    const {sut} = createSut()

    sut.addItem({name:'Camiseta', price:44})
    sut.addItem({name:'Calça', price:46})

    expect(sut.items.length).toBe(2)

    sut.removeItems(1)

    expect(sut.items.length).toBe(1)


  })

  test('Should call discount calculate(price) with TotalWithDiscout items' ,() =>{

    const {sut, discountMock} = createSut()

    const discoutMockSpy = jest.spyOn(discountMock, 'calculate');

    sut.totalWithDicount()

    expect(discoutMockSpy).toHaveBeenCalledTimes(1)


  })


})

