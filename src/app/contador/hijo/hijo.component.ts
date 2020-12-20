import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/appReducer.interface';
import * as actions from '../contador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  public contador: number;
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    // this.contador = this.contador * 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({numero: 2}))
  }
  dividir() {
    // this.contador = this.contador / 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({numero: 2}))
  }

  contadorCambio(event) {
    // this.contador = event;
    // this.cambioContador.emit(this.contador);
  }
}
