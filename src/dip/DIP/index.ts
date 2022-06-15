/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.
Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Menssagin } from "./services/msg"
import { Order } from "./classes/oder"
import { Persistency } from "./services/persistence"
import { Produto } from "./classes/produto"
import { ShoppingCarLegacy } from "./classes/shopping-car-com SRP"
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer, EnterPriseCustomer } from './classes/cutomer';

const fify = new FiftyPercentDiscount()
const shopping = new ShoppingCarLegacy(fify)
const menssagin =  new Menssagin()
const persistency = new Persistency()
const individual = new IndividualCustomer('Jean','Ribeiro',12345335)
// const entripese = new EnterPriseCustomer('JRS',354345623454423)
const order = new Order(shopping, menssagin,persistency,individual)


shopping.addItem(new Produto ('Camiseta', 60))
shopping.addItem(new Produto ('Mala',80))
shopping.addItem(new Produto ('Camiseta',60))

console.log(shopping.items)
console.log(shopping.total())
console.log(shopping.totalWithDicount())
order.checkout()
console.log(order.ordemStatus)
