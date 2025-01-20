import { CarouselButtonsCardComponent } from '../../carousel-buttons-card/carousel-buttons-card.component';
import { ImageCardComponent } from '../../image-card/image-card.component';
import { ImageCircleCardComponent } from '../../image-circle-card/image-circle-card.component';
import { CarouselTypes } from '../models/carousel.model';

export type CarouselCardComponetsUnion =
  | typeof CarouselButtonsCardComponent
  | typeof ImageCardComponent
  | typeof ImageCircleCardComponent;

export const CAROUSEL_CARD_COMPONENTS: Record<
  CarouselTypes,
  CarouselCardComponetsUnion
> = {
  [CarouselTypes.InImage]: ImageCardComponent,
  [CarouselTypes.SingleRow]: ImageCardComponent,
  [CarouselTypes.TwoRows]: ImageCardComponent,
  [CarouselTypes.TextAndCircleImage]: ImageCircleCardComponent,
  [CarouselTypes.TextButton]: CarouselButtonsCardComponent,
};
