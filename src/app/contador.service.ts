import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
 public contador:number = 0;
 public contadorChange:number = 1;
 
  constructor() { }

  incrementar = (contador: number):number=>{
    return contador+this.contadorChange;
  }

  decrementar =  (contador: number):number=>{
    return contador-this.contadorChange;
  }

  multiplicar = (contador: number):number=> {
    return contador * 2;
  }

  dividir =  (contador: number):number=>{
    return contador / 2;
  }

  resetear =  (contador: number):number=>{
    return contador = 0;
  }
}