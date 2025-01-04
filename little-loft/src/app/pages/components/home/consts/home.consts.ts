import {
  CATEGORY_CARD_DATA,
  SHOP_LOCAL_CARD_DATA,
} from 'src/app/helpers/consts/dummy-data.consts';
import {
  DashboardInfo,
  DashboardTypes,
} from '../../../../page-sections/components/dashboard/models/dashboard.models';

export const HOME_DASHBOARD_DATA: DashboardInfo = {
  title: 'Home',
  sections: [
    {
      index: 0,
      type: DashboardTypes.HeroImage,
    },
    {
      index: 1,
      type: DashboardTypes.Carousel,
      carouselData: CATEGORY_CARD_DATA,
    },
    {
      index: 2,
      type: DashboardTypes.HeroHalfAndHalf,
    },
    {
      index: 3,
      type: DashboardTypes.Carousel,
      carouselData: SHOP_LOCAL_CARD_DATA,
    },
    {
      index: 4,
      type: DashboardTypes.HeroShapes,
    },
  ],
};
