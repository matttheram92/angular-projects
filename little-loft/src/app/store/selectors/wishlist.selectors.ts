import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { WishlistState } from '../reducers/wishlist.reducer';

export const selectWishlistState = createFeatureSelector<
  AppState,
  WishlistState
>('wishlist');

export const selectWishlistItems = createSelector(
  selectWishlistState,
  (state) => state.itemIds
);
