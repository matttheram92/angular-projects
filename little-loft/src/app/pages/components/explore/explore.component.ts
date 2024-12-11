import { Component, OnInit } from '@angular/core';
import {
  CATEGORY_BUTTONS,
  SHOP_LOCAL_CARD_DATA,
  SPECIAL_PRICES_CARD_DATA,
  TOP_SELLERS_DATA,
  TOYS_AND_GAMES_CARD_DATA,
} from 'src/app/helpers/consts/dummy-data.consts';
import { CarouselData } from 'src/app/page-sections/components/carousel/models/carousel.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  shopLocalCarousel: CarouselData = SHOP_LOCAL_CARD_DATA;
  specialPricesCarousel: CarouselData = SPECIAL_PRICES_CARD_DATA;
  categoryButtonsCarousel: CarouselData = CATEGORY_BUTTONS;
  topSellersCarousel: CarouselData = TOP_SELLERS_DATA;
  toysAndGamesCarousel: CarouselData = TOYS_AND_GAMES_CARD_DATA;

  ngOnInit(): void {}
}
