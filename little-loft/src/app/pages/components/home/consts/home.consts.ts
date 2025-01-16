import {
  CATEGORY_CARD_DATA,
  SHOP_LOCAL_CARD_DATA,
} from '@app/core/consts/dummy-data.consts';
import {
  DashboardInfo,
  DashboardTypes,
} from '../../../../page-sections/components/dashboard/models/dashboard.models';
import { DUMMY_IMAGE_URLS } from '@app/core/consts/dummy-images.consts';

export const HOME_DASHBOARD_DATA: DashboardInfo = {
  title: 'Home',
  sections: [
    {
      index: 0,
      type: DashboardTypes.HeroImage,
      header: 'Soft & cuddly',
      subHeader: 'Anim aute id magna aliqua',
      imageSrc: DUMMY_IMAGE_URLS.childsRoom,
      imageAlt: 'An image of a childs room',
      buttonPrimary: { label: 'Get started', action: 'sell' },
      buttonSecondary: { label: 'Discover →', action: 'explore' },
    },
    {
      index: 1,
      type: DashboardTypes.Carousel,
      carouselData: CATEGORY_CARD_DATA,
    },
    {
      index: 2,
      type: DashboardTypes.HeroHalfAndHalf,
      header: 'We Love...',
      subHeader:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores esse tenetur rem.',
      subHeaderShort: 'Lorem ipsum dolor sit amet.',
      imageSrc: DUMMY_IMAGE_URLS.room,
      imageAlt: 'An image of a childs room',
      buttonPrimary: { label: 'Read More >', action: '' },
    },
    {
      index: 3,
      type: DashboardTypes.Carousel,
      carouselData: SHOP_LOCAL_CARD_DATA,
    },
    {
      index: 4,
      type: DashboardTypes.HeroShapes,
      header: 'Our impact',
      subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      buttonPrimary: { label: 'Explore', action: 'explore' },
    },
  ],
};
