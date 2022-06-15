import {Produto} from './produto';


const createSut =(name:string,price:number): Produto =>{

  return new Produto(name,price)
}


describe('Produto',()=>{

  afterEach(() =>{
    jest.clearAllMocks()
  })

  it('should Have property name and price',()=>{

    //System under test
    const sut = createSut('Camiseta',40)

    expect(sut).toHaveProperty('name','Camiseta')
    expect(sut).toHaveProperty('price',40)
    expect(sut.price).toBeCloseTo(40)

  })

})
