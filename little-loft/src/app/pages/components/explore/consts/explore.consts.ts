import {
  CATEGORY_BUTTONS,
  SHOP_LOCAL_CARD_DATA,
  SPECIAL_PRICES_CARD_DATA,
  TOP_SELLERS_DATA,
  TOYS_AND_GAMES_CARD_DATA,
} from '@app/core/consts/dummy-data.consts';
import {
  DashboardInfo,
  DashboardTypes,
} from '../../../../page-sections/components/dashboard/models/dashboard.models';
import { DUMMY_IMAGE_URLS } from '@app/core/consts/dummy-images.consts';

export const EXPLORE_DASHBOARD_DATA: DashboardInfo = {
  title: 'Explort',
  sections: [
    {
      index: 0,
      type: DashboardTypes.Carousel,
      carouselData: CATEGORY_BUTTONS,
    },
    {
      index: 1,
      type: DashboardTypes.HeroHalfAndHalf,
      header: 'We Love...',
      subHeader:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores esse tenetur rem.',
      imageSrc: DUMMY_IMAGE_URLS.room,
      imageAlt: 'An image of a childs room',
      buttonPrimary: { label: 'Read More >', action: '' },
    },
    {
      index: 2,
      type: DashboardTypes.Carousel,
      carouselData: TOP_SELLERS_DATA,
    },
    {
      index: 3,
      type: DashboardTypes.Carousel,
      carouselData: SPECIAL_PRICES_CARD_DATA,
    },
    {
      index: 4,
      type: DashboardTypes.Carousel,
      carouselData: SHOP_LOCAL_CARD_DATA,
    },
    {
      index: 5,
      type: DashboardTypes.Carousel,
      carouselData: TOYS_AND_GAMES_CARD_DATA,
    },
  ],
};
