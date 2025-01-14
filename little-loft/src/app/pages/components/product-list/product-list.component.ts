import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItem } from '@app/core/models/product-list.models';
import { PRODUCT_EXAMPLE_DATA } from '@app/core/consts/dummy-data.consts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: false,
})
export class ProductListComponent {
  products: ProductItem[] = PRODUCT_EXAMPLE_DATA;

  constructor(private router: Router) {}

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
