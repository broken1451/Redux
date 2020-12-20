import { createAction, props } from '@ngrx/store';

// export const increment = createAction('[nombre que tendra la accion] Increment');
export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
// export const multiplicar = createAction('[Contador] Multiplicar',props<{propiedad/parametro a recibir:tipo de dato}propiedad:tipo>() ==>  poder especificar caracteristicas a esta accion, definir q tipo de informacion puedo recibir cuando uilice una accion de tipo multiplicar)
export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{ numero: number }>()
);
export const dividir = createAction(
  '[Contador] Dividir',
  props<{ numero: number }>()
);
export const reset = createAction(
  '[Contador] Reset'
);
