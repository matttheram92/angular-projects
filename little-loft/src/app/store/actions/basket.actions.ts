import { createAction, props } from '@ngrx/store';

export const reset = createAction('[Basket Component] Reset');

export const addToBasket = createAction(
  '[Basket Component] Add To Basket',
  props<{ id: number }>()
);
export const removeFromBasket = createAction(
  '[Basket Component] Remove From Basket',
  props<{ id: number }>()
);
