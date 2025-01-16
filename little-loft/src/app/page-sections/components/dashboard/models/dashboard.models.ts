import { ButtonProps } from '@app/controls/models/buttons.model';
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

export interface DashboardHeroSectionBase extends DashboardSectionBase {
  header: string;
  subHeader: string;
  buttonPrimary?: ButtonProps;
}

export interface DashboardHeroImage extends DashboardHeroSectionBase {
  type: DashboardTypes.HeroImage;
  imageSrc: string;
  imageAlt: string;
  buttonSecondary?: ButtonProps;
}

export interface DashboardCarousel extends DashboardSectionBase {
  type: DashboardTypes.Carousel;
  carouselData: CarouselData;
}

export interface DashboardHeroHalfAndHalf extends DashboardHeroSectionBase {
  type: DashboardTypes.HeroHalfAndHalf;
  subHeaderShort: string;
  imageSrc: string;
  imageAlt: string;
}

export interface DashboardHeroShapes extends DashboardHeroSectionBase {
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
