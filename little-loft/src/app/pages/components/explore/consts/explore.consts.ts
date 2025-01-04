import {
  CATEGORY_BUTTONS,
  SHOP_LOCAL_CARD_DATA,
  SPECIAL_PRICES_CARD_DATA,
  TOP_SELLERS_DATA,
  TOYS_AND_GAMES_CARD_DATA,
} from 'src/app/helpers/consts/dummy-data.consts';
import {
  DashboardInfo,
  DashboardTypes,
} from '../../../../page-sections/components/dashboard/models/dashboard.models';

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
