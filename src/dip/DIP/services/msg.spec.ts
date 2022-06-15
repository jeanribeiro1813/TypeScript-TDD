import {Menssagin} from './msg';



const createSut = () =>{
  return new Menssagin();
}

describe('Menssagem',()=>{

  afterEach(() =>{
    jest.clearAllMocks()
  })


  it('should return undefined',()=>{

    //System under test
    const sut = createSut()

    expect(sut.sendMessage('teste')).toBeUndefined()

  })

  it('should call console log once',()=>{

    const sut = createSut()

    const consoleSpy = jest.spyOn(console,'log');

    sut.sendMessage('teste')

    expect(consoleSpy).toHaveBeenCalledTimes(1)

  })

  it('should call console log with "Mensagem enviada" and msg',()=>{

    const sut = createSut()

    const consoleSpy = jest.spyOn(console,'log');

    sut.sendMessage('mensagem')

    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'mensagem')

  })
})
