

//Forçando para que o Desconto só receba number
export abstract class Discount{

protected discount = 0

calculate(valor:number):number{
  return valor - valor * (this.discount /  100)
}
}

export class FiftyPercentDiscount extends Discount{
  protected readonly discount = 0.5
}

export class NoPercent extends Discount{
  protected readonly discount = 0.0

}
