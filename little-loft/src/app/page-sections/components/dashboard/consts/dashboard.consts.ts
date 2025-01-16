import { DashboardTypes } from '../models/dashboard.models';
import { CarouselComponent } from '../../carousel/carousel.component';
import { HeroSectionWithImageComponent } from '../../hero-section/hero-section-with-image/hero-section-with-image.component';
import { HeroSectionHalfAndHalfComponent } from '../../hero-section/hero-section-half-and-half/hero-section-half-and-half.component';
import { HeroSectionWithShapesComponent } from '../../hero-section/hero-section-with-shapes/hero-section-with-shapes.component';

export type DashboardComponentsUnion =
  | typeof HeroSectionWithImageComponent
  | typeof CarouselComponent
  | typeof HeroSectionHalfAndHalfComponent
  | typeof HeroSectionWithShapesComponent;

export const DASHBOARD_COMPONENTS: Record<
  DashboardTypes,
  DashboardComponentsUnion
> = {
  [DashboardTypes.HeroImage]: HeroSectionWithImageComponent,
  [DashboardTypes.Carousel]: CarouselComponent,
  [DashboardTypes.HeroHalfAndHalf]: HeroSectionHalfAndHalfComponent,
  [DashboardTypes.HeroShapes]: HeroSectionWithShapesComponent,
};
