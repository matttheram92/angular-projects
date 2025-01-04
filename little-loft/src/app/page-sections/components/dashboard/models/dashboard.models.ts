import { CarouselData } from 'src/app/page-sections/components/carousel/models/carousel.model';

export enum DashboardTypes {
  HeroImage = 'hero-image',
  Carousel = 'carousel',
  HeroHalfAndHalf = 'hero-half-and-half',
  HeroShapes = 'hero-shapes',
}

export interface DashboardSectionBase {
  index: number;
  type: DashboardTypes;
}

export interface DashboardHeroImage extends DashboardSectionBase {
  type: DashboardTypes.HeroImage;
}

export interface DashboardCarousel extends DashboardSectionBase {
  type: DashboardTypes.Carousel;
  carouselData: CarouselData;
}

export interface DashboardHeroHalfAndHalf extends DashboardSectionBase {
  type: DashboardTypes.HeroHalfAndHalf;
}

export interface DashboardHeroShapes extends DashboardSectionBase {
  type: DashboardTypes.HeroShapes;
}

export type DashboardSection =
  | DashboardCarousel
  | DashboardHeroImage
  | DashboardHeroHalfAndHalf
  | DashboardHeroShapes;

export interface DashboardInfo {
  title: string;
  sections: DashboardSection[];
}
