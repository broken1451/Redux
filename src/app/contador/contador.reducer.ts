import { Action, createReducer, on } from '@ngrx/store';
import { decrementar, dividir, incrementar, multiplicar, reset } from './contador.actions';

// export const contadorReducer = (state: number = 10, action: Action) => {
//   switch (action.type) {
//     case incrementar.type:
//       console.log(incrementar.type);
//       return state + 1;
//     case decrementar.type:
//        console.log(decrementar.type);
//        return state - 1;
//     default:
//       return state;
//   }
// };

export const initialState = 20;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  // on(multiplicar, (state, props) => state * numero)
  // on(multiplicar, (state, {numero}) => state * props.numero)
  on(multiplicar, (state, props) => state *  props.numero),
  on(dividir, (state, props) => state / props.numero),
  on(reset, (state) => initialState )
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
