import { createReducer, on } from '@ngrx/store';
import * as BasketActions from '../actions/basket.actions';

export interface BasketState {
  itemIds: number[];
}

const initialState: BasketState = {
  itemIds: [],
};

export const basketReducer = createReducer(
  initialState,
  on(BasketActions.reset, (state) => ({ ...state, count: 0 })),
  on(BasketActions.addToBasket, (state, { id }) => ({
    itemIds: [...state.itemIds, id],
  })),
  on(BasketActions.removeFromBasket, (state, { id }) => {
    const updatedItemIds = state.itemIds.filter((itemId) => itemId !== id);

    return {
      itemIds: updatedItemIds,
    };
  })
);
