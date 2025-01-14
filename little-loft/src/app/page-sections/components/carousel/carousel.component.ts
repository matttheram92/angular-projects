import { Component, Inject } from '@angular/core';
import { CarouselData, CarouselTypes } from './models/carousel.model';
import { Router } from '@angular/router';
import { DashboardCarousel } from 'src/app/page-sections/components/dashboard/models/dashboard.models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: false,
})
export class CarouselComponent {
  public carouselData: CarouselData;
  public carouselTypeButtons = CarouselTypes.TextButton;
  public carouselTypeInImage = CarouselTypes.InImage;
  public carouselTypeSingleRow = CarouselTypes.SingleRow;
  public carouselTypeTwoRows = CarouselTypes.TwoRows;
  public carouselTypeTextAndCircleImage = CarouselTypes.TextAndCircleImage;

  constructor(
    @Inject('sectionData') public sectionData: DashboardCarousel,
    private router: Router
  ) {
    this.carouselData = this.sectionData.carouselData;
  }

  public getCarouselTypeStyles(): string {
    switch (this.carouselData.type) {
      case CarouselTypes.TextAndCircleImage:
        return 'gap-8 md:gap-24 lg:gap-8 grid-cols-12 md:w-full';
      case CarouselTypes.InImage:
        return 'lg:w-full gap-4 grid-cols-4';
      default:
        return 'md:w-full gap-4 grid-cols-4';
    }
  }

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
