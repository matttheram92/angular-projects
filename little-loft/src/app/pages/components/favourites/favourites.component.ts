import { Component } from '@angular/core';
import { PRODUCT_EXAMPLE_DATA } from '@app/core/consts/dummy-data.consts';
import { ProductItem } from '@app/core/models/product-list.models';
import { AppState } from '@app/store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import * as WishlistActions from '@app/store/actions/wishlist.actions';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  standalone: false,
})
export class FavouritesComponent {
  public wishlistProducts: ProductItem[] = [];

  constructor(private store: Store<AppState>) {
    this.getProductsFromStorage();
  }

  private getProductsFromStorage(): void {
    this.store
      .select((state) => state.wishlist.itemIds)
      .pipe(
        map((basketItemIds) =>
          basketItemIds
            .map((id) => PRODUCT_EXAMPLE_DATA.find((x) => x.id === id))
            .filter((product) => product !== undefined)
        )
      )
      .subscribe((products) => {
        this.wishlistProducts = products;
      });
  }

  public removeFromWishlist(productId: number): void {
    this.store.dispatch(WishlistActions.removeFromWishlist({ id: productId }));
  }
}
