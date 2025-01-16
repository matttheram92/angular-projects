export enum CarouselTypes {
  InImage = 'InImage',
  SingleRow = 'SingleRow',
  TwoRows = 'TwoRows',
  TextAndCircleImage = 'TextAndCircleImage',
  TextButton = 'TextButton',
}

export interface CarouselCard {
  id: number;
  title: string;
  link: string;
  imageSrc?: string;
  alt?: string;
  description?: string;
  price?: number;
}

export interface CarouselData {
  title: string;
  type: CarouselTypes;
  href: string;
  cards: CarouselCard[];
}
