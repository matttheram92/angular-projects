import { Component } from '@angular/core';
import {
  CATEGORY_CARD_DATA,
  SHOP_LOCAL_CARD_DATA,
} from 'src/app/helpers/consts/dummy-data.consts';
import { CarouselData } from 'src/app/page-sections/components/carousel/models/carousel.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  categoryCarousel: CarouselData = CATEGORY_CARD_DATA;
  shopLocalCarousel: CarouselData = SHOP_LOCAL_CARD_DATA;
}
