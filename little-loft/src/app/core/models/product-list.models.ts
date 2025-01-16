import { Seller } from './seller.models';

export interface ProductItem {
  id: number;
  imageSrc: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  seller: Seller;
  _links?: {
    self: { href: string };
    seller: { href: string };
  };
}
