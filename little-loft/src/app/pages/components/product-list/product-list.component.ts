import { Component } from '@angular/core';
import { PRODUCT_EXAMPLE_DATA } from 'src/app/helpers/consts/dummy-data.consts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: any[] = PRODUCT_EXAMPLE_DATA;
}
