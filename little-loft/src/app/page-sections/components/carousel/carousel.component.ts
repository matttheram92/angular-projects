import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CarouselData, CarouselTypes } from './models/carousel.model';
import { DashboardCarousel } from '../dashboard/models/dashboard.models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CarouselComponent implements OnInit {
  public carouselData: CarouselData;
  public carouselTypeButtons = CarouselTypes.TextButton;
  public carouselTypeInImage = CarouselTypes.InImage;
  public carouselTypeSingleRow = CarouselTypes.SingleRow;
  public carouselTypeTwoRows = CarouselTypes.TwoRows;
  public carouselTypeTextAndCircleImage = CarouselTypes.TextAndCircleImage;

  @ViewChild('carouselContainer', { static: false })
  public carouselContainer!: ElementRef<any>;

  constructor(@Inject('sectionData') public sectionData: DashboardCarousel) {
    this.carouselData = this.sectionData.carouselData;
  }

  ngOnInit(): void {}

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

  get hiddenSideScrollClasses(): any {
    return {
      'lg:hidden': this.carouselData.type === this.carouselTypeInImage,
      'md:hidden':
        this.carouselData.type === this.carouselTypeSingleRow ||
        this.carouselData.type === this.carouselTypeTwoRows ||
        this.carouselData.type === this.carouselTypeTextAndCircleImage,
      'sm:block': this.carouselData.type !== this.carouselTypeButtons,
      hidden: true,
    };
  }

  scrollLeft(): void {
    if (this.carouselContainer && this.carouselContainer.nativeElement) {
      const container = this.carouselContainer.nativeElement;
      const targetScrollLeft = container.scrollLeft - 150;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  }

  scrollRight(): void {
    if (this.carouselContainer && this.carouselContainer.nativeElement) {
      const container = this.carouselContainer.nativeElement;
      const targetScrollLeft = container.scrollLeft + 150;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  }
}
