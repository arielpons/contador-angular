import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementar-decrementar',
  templateUrl: './incrementar-decrementar.component.html',
  styleUrls: ['./incrementar-decrementar.component.scss']
})
export class IncrementarDecrementarComponent {

  @Input() contador:number = 0;
  @Output() contadorChange = new EventEmitter<number>();

  incrementar() {
    this.contador++;
    this.contadorChange.emit(this.contador);
  }

  decrementar() {
    this.contador--;
    this.contadorChange.emit(this.contador);
  }
  myFunction(event:number){
    this.contador = event;  
    this.contadorChange.emit(this.contador);
   }
}

