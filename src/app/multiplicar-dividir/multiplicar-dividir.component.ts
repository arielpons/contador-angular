import { Component, OnInit,Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiplicar-dividir',
  templateUrl: './multiplicar-dividir.component.html',
  styleUrls: ['./multiplicar-dividir.component.scss']
})
export class MultiplicarDividirComponent {
  @Input() contador: number = 0;
  @Output() contadorChange = new EventEmitter<number>();

multiplicar() {
    this.contadorChange.emit(this.contador =  this.contador * 2);
  }

dividir() {
    this.contadorChange.emit(this.contador= this.contador / 2);
  }
  myFunction(event:number){
    this.contador = event;  
    this.contadorChange.emit(this.contador);
   }
}
