import {Customer,CustomerOrder,EntripeseCustomer} from '../interfaces/protocols/customesProtocols'

export class  IndividualCustomer implements Customer ,CustomerOrder{

    name:string
    sobrenome:string
    cpf:number

    constructor( name:string,
      sobrenome:string,
      cpf:number){
        this.name = name,
        this.sobrenome = sobrenome
        this.cpf = cpf
      }

      getName(): string {
          return this.name + ' ' + this.sobrenome
      }

      getIDN(): string {
          return this.cpf.toString()
      }

}


export class  EnterPriseCustomer implements EntripeseCustomer , CustomerOrder{

  name:string
  sobrenome:string
  cnpj:number

  constructor( name:string,
    sobrenome:string,
    cnpj:number){
      this.name = name,
      this.sobrenome = sobrenome
      this.cnpj = cnpj
    }


    getName(): string {
      return this.name
  }

    getIDN(): string {
      return this.cnpj.toString()
  }

}

