import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  public socketStatus = false;

  constructor(
    private socket: Socket
  ) {  this.checkStatus(); }


  checkStatus(){
    this.socket.on('connect', ()=>{
      console.log('Conectado al servidor');
      this.socketStatus = true;
    })

    this.socket.on('disconnect', ()=>{
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    })
  }

  //Recordar que para emitir, siempre tendrá la siguiente estructura
  // emit( ' evento', payload, callback?)
  emit( evento: string, payload?:any, callback?: Function){
    console.log('Emitiendo mensaje');
    this.socket.emit( evento, payload, callback);
  }


  listen( evento:string){
    return this.socket.fromEvent( evento );
  }
}
