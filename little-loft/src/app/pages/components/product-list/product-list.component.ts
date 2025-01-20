import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LIST_DATA } from '@app/core/consts/dummy-data.consts';
import { CarouselCard, CarouselTypes } from '@app/page-sections/components/carousel/models/carousel.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: false,
})
export class ProductListComponent {
  public products: CarouselCard[] = PRODUCT_LIST_DATA;
  public twoRowCarouselType: CarouselTypes = CarouselTypes.TwoRows;

  constructor(private router: Router) {}

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
