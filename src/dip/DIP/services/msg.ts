export interface MSGProtocols{
  sendMessage(msg:string):void

}

export class Menssagin implements MSGProtocols{

  sendMessage(msg:string):void{
  console.log('Mensagem enviada:', msg)
 }
}
