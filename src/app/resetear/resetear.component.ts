import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-resetear',
  templateUrl: './resetear.component.html',
  styleUrls: ['./resetear.component.scss']
})
export class ResetearComponent  {
  constructor(public ContadorService: ContadorService) {}
  ngOnInit(): void {
  
  }
  resetear(): void {
    this.ContadorService.contador = this.ContadorService.resetear(this.ContadorService.contador);
  }

}
