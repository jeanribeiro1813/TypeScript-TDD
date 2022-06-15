import {IndividualCustomer,EnterPriseCustomer} from './cutomer';


const createIndividualCustomer = ( name:string,
  sobrenome:string,
  cpf:number  ): IndividualCustomer =>{

  return new IndividualCustomer (name,sobrenome,cpf)
}


const createEnterpriseCustomer = ( name:string,
  sobrenome:string,
  cnpj:number  ): EnterPriseCustomer =>{

  return new EnterPriseCustomer (name,sobrenome,cnpj)
}


describe('Individual Customer',()=>{

  afterEach(() =>{
    jest.clearAllMocks()
  })

  it('should have name , sobrenome e cpf',()=>{

    //System under test
    const sut = createIndividualCustomer('Jean','Ribeiro',2222222)

    expect(sut).toHaveProperty('name','Jean')
    expect(sut).toHaveProperty('sobrenome','Ribeiro')
    expect(sut).toHaveProperty('cpf',2222222)
  })

  it('should have methods to get name and idn',()=>{

    //System under test
    const sut = createIndividualCustomer('Jean','Ribeiro',2222222)

    expect(sut.getName()).toBe('Jean Ribeiro')
    expect(sut.getIDN()).toBe('2222222')


  })
})


describe('Enterprise Customer',()=>{

  afterEach(() =>{
    jest.clearAllMocks()
  })

  it('should have name , sobrenome e cnpj',()=>{

    //System under test
    const sut = createEnterpriseCustomer('Jean','LX',2222222)

    expect(sut).toHaveProperty('name','Jean')
    expect(sut).toHaveProperty('sobrenome','LX')
    expect(sut).toHaveProperty('cnpj',2222222)
  })

  it('should have methods to get name and idn',()=>{

    //System under test
    const sut = createEnterpriseCustomer('Jean','Ribeiro',2222222)

    expect(sut.getName()).toBe('Jean')
    expect(sut.getIDN()).toBe('2222222')


  })
})
