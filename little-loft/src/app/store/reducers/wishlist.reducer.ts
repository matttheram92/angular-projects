import { createReducer, on } from '@ngrx/store';
import * as WishlistActions from '../actions/wishlist.actions';

export interface WishlistState {
  itemIds: number[];
}

const initialState: WishlistState = {
  itemIds: [],
};

export const wishlistReducer = createReducer(
  initialState,
  on(WishlistActions.reset, () => ({
    itemIds: [],
  })),
  on(WishlistActions.addToWishlist, (state, { id }) => ({
    itemIds: [...state.itemIds, id],
  })),
  on(WishlistActions.removeFromWishlist, (state, { id }) => ({
    itemIds: state.itemIds.filter((itemId) => itemId !== id),
  }))
);
