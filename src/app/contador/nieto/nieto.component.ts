import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/appReducer.interface';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  public contador: number
  // @Input() contador: number
  // @Output() contadorCambio = new EventEmitter<number>()

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador)=>{
      this.contador = contador;
    })
  }

  reset(){
    // this.contador = 0;
    // this.contadorCambio.emit(this.contador)
    this.store.dispatch(actions.reset())
  }

}
