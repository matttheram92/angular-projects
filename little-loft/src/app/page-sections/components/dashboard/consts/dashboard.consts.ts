import { CarouselComponent } from 'src/app/page-sections/components/carousel/carousel.component';
import { HeroSectionHalfAndHalfComponent } from 'src/app/page-sections/components/hero-section/hero-section-half-and-half/hero-section-half-and-half.component';
import { HeroSectionWithImageComponent } from 'src/app/page-sections/components/hero-section/hero-section-with-image/hero-section-with-image.component';
import { HeroSectionWithShapesComponent } from 'src/app/page-sections/components/hero-section/hero-section-with-shapes/hero-section-with-shapes.component';
import { DashboardTypes } from '../models/dashboard.models';

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
