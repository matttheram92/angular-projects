import { Seller } from './seller.models';

export interface ProductItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  seller: Seller;
  _links?: {
    self: { href: string };
    seller: { href: string };
  };
}
