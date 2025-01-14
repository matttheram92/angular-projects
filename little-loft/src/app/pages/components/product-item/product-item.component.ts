import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { addToBasket } from '@app/store/actions/basket.actions';
import {
  addToWishlist,
  removeFromWishlist,
} from '@app/store/actions/wishlist.actions';
import { AppState } from '@app/store/app.state';
import { ProductItem } from '@app/core/models/product-list.models';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCT_EXAMPLE_DATA } from '@app/core/consts/dummy-data.consts';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  standalone: false,
})
export class ProductItemComponent implements OnInit {
  public product!: ProductItem;
  public inBasket = false;
  public inWishlist = false;
  public wishlistButtonDefault = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  async ngOnInit(): Promise<void> {
    await this.setProductData();
    await this.updateBasketStatus();
    await this.updateWishlistStatus();
  }

  private async setProductData(): Promise<void> {
    const productId = this.route.snapshot.params['id'];
    const filteredProduct = PRODUCT_EXAMPLE_DATA.find(
      (p) => p.id.toString() === productId
    );
    this.product = filteredProduct ?? PRODUCT_EXAMPLE_DATA[0];
  }

  private async updateBasketStatus(): Promise<void> {
    const basketItemIds = await firstValueFrom(
      this.store.select((state) => state.basket.itemIds)
    );
    this.inBasket = basketItemIds.some((id) => id === this.product.id);
  }

  private async updateWishlistStatus(): Promise<void> {
    const wishlistItemIds = await firstValueFrom(
      this.store.select((state) => state.wishlist.itemIds)
    );
    const productInWishlist = wishlistItemIds.some(
      (id) => id === this.product.id
    );
    this.inWishlist = productInWishlist;
    this.wishlistButtonDefault = productInWishlist;
  }

  public addToBasket(): void {
    this.inBasket = true;
    this.store.dispatch(addToBasket({ id: this.product.id }));
    this.navigateToRoute('basket');
  }

  public addToWishlist(): void {
    if (!this.inWishlist) {
      this.store.dispatch(addToWishlist({ id: this.product.id }));
    } else {
      this.store.dispatch(removeFromWishlist({ id: this.product.id }));
    }

    this.inWishlist = !this.inWishlist;
  }

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
