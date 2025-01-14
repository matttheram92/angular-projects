import { BasketState } from './reducers/basket.reducer';
import { WishlistState } from './reducers/wishlist.reducer';

export interface AppState {
  basket: BasketState;
  wishlist: WishlistState;
}
