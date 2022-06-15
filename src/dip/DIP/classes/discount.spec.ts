import {Discount,FiftyPercentDiscount,NoPercent} from './discount';


const createSut = (className: new() => Discount): Discount =>{

  return new className()
}


describe('Discount',()=>{

  afterEach(() =>{
    jest.clearAllMocks()
  })

  it('should apply not Percent',()=>{

    //System under test
    const sut = createSut(NoPercent)

    expect(sut.calculate(10.99)).toBeCloseTo(10.99)


  })

  it('should apply 50% the Percent',()=>{

    //System under test
    const sut = createSut(FiftyPercentDiscount)

    expect(sut.calculate(150.5)).toBeCloseTo(149.7475)

  })

})
