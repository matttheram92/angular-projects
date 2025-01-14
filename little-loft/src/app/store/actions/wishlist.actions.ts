import { createAction, props } from '@ngrx/store';

export const reset = createAction('[Wishlist Component] Reset');

export const addToWishlist = createAction(
  '[Wishlist Component] Add To Wishlist',
  props<{ id: number }>()
);
export const removeFromWishlist = createAction(
  '[Wishlist Component] Remove From Wishlist',
  props<{ id: number }>()
);
