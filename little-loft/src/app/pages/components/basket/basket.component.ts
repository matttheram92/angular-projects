import { Component } from '@angular/core';
import { PRODUCT_EXAMPLE_DATA } from '@app/core/consts/dummy-data.consts';
import { ProductItem } from '@app/core/models/product-list.models';
import { AppState } from '@app/store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import * as BasketActions from '@app/store/actions/basket.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  standalone: false,
})
export class BasketComponent {
  public basketProducts: ProductItem[] = [];

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.getProductsFromStorage();
  }

  private getProductsFromStorage(): void {
    this.store
      .select((state) => state.basket.itemIds)
      .pipe(
        map((basketItemIds) =>
          basketItemIds
            .map((id) => PRODUCT_EXAMPLE_DATA.find((x) => x.id === id))
            .filter((product) => product !== undefined)
        )
      )
      .subscribe((products) => {
        this.basketProducts = products;
      });
  }

  public removeFromBasket(productId: number): void {
    this.store.dispatch(BasketActions.removeFromBasket({ id: productId }));
  }

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
