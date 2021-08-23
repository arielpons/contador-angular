import { Component, OnInit,Input ,Output, EventEmitter } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-multiplicar-dividir',
  templateUrl: './multiplicar-dividir.component.html',
  styleUrls: ['./multiplicar-dividir.component.scss']
})
export class MultiplicarDividirComponent {
  constructor(public ContadorService: ContadorService) {}

  ngOnInit(): void {
  }
  
  multiplicar(): void {
    this.ContadorService.contador = this.ContadorService.multiplicar(this.ContadorService.contador);
  }
  dividir(): void {
    this.ContadorService.contador = this.ContadorService.dividir(this.ContadorService.contador);
  }
}
