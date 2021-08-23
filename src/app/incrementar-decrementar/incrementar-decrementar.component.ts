import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-incrementar-decrementar',
  templateUrl: './incrementar-decrementar.component.html',
  styleUrls: ['./incrementar-decrementar.component.scss']
})
export class IncrementarDecrementarComponent {
 constructor(public ContadorService: ContadorService) {}
ngOnInit(): void {
  this.ContadorService.contador = this.ContadorService.contador;
}
decrementar(): void {
  this.ContadorService.contador = this.ContadorService.decrementar(this.ContadorService.contador);
}
incrementar(): void {
  this.ContadorService.contador = this.ContadorService.incrementar(this.ContadorService.contador);
}
}

