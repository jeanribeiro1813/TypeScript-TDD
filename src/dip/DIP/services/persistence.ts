export interface PersistencyProtocol{
  saveOrder():void
}

export class Persistency implements PersistencyProtocol{
  saveOrder():void{
  console.log('Pedido salvo com sucesso')
}

}
