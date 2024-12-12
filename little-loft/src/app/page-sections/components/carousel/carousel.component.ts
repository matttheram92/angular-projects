import { Component, Input } from '@angular/core';
import { CarouselData, CarouselTypes } from './models/carousel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input()
  carouselData!: CarouselData;

  constructor(private router: Router) {}

  public carouselTypeButtons = CarouselTypes.TextButton;
  public carouselTypeInImage = CarouselTypes.InImage;
  public carouselTypeSingleRow = CarouselTypes.SingleRow;
  public carouselTypeTwoRows = CarouselTypes.TwoRows;
  public carouselTypeTextAndCircleImage = CarouselTypes.TextAndCircleImage;

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
