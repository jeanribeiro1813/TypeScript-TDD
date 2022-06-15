describe('Primitive Value',()=>{

  it('should test jest assertions',()=>{
    const number = 10


    expect(number).toBe(10)
    //Mais para objeto
    expect(number).toEqual(10)

    expect(number).toBeGreaterThan(7)

  })
})

describe('Primitive Value',()=>{

  it('should test jest assertions with Object',()=>{

    const person  = {name:'Jean',idade:90}
    const anotherPerson  = {...person}

    expect(person).toEqual(anotherPerson)
    expect(person).toHaveProperty('name')

  })
})
