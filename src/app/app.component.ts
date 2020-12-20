import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { incrementar, decrementar } from './contador/contador.actions';
import * as actions from './contador/contador.actions';
import { AppState } from './interfaces/appReducer.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    // this.store.subscribe(state => {
    //   this.contador = state.contador;
    //   console.log('State ======> ', state)
    // })
    // escuchar un unico movimiento del state, es q queremos escuchar
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
      console.log('contador ======> ', contador);
    });
  }

  incrementar() {
    // this.contador = this.contador + 1;
    this.store.dispatch(actions.incrementar());
  }
  decrementar() {
    this.store.dispatch(actions.decrementar());
    // this.contador = this.contador - 1;
  }

  cambioContador(event) {
    this.contador = event;
  }
}
