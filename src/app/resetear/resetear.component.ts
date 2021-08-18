import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-resetear',
  templateUrl: './resetear.component.html',
  styleUrls: ['./resetear.component.scss']
})
export class ResetearComponent  {
  @Input() contador: number = 0;
  @Output() contadorChange = new EventEmitter<number>();
 
  resetear() {
    this.contadorChange.emit(this.contador = 0);
  }



}
