import {
  CarouselData,
  CarouselTypes,
} from 'src/app/page-sections/components/carousel/models/carousel.model';
import { ProductItem } from '../models/product-list.models';
import { DUMMY_IMAGE_URLS } from './dummy-images.consts';

export const PRODUCT_EXAMPLE_DATA: ProductItem[] = [
  {
    src: DUMMY_IMAGE_URLS.dinosaur,
    alt: 'A soft gray dinosaur toy',
    title: 'Dino Plush',
    price: '£30',
  },
  {
    src: DUMMY_IMAGE_URLS.keys,
    alt: 'Plastic keys on a teething ring.',
    title: 'The Keys',
    price: '£30',
  },
  {
    src: DUMMY_IMAGE_URLS.blocks,

    alt: 'Building block cubes with letter on.',
    title: 'Wood Letters',
    price: '£15',
  },
  {
    src: DUMMY_IMAGE_URLS.teddy,
    alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
    title: 'Teddy Bear',
    price: '£20',
  },
  {
    src: DUMMY_IMAGE_URLS.dinosaur,
    alt: 'A soft gray dinosaur toy',
    title: 'Dino Plush',
    price: '£30',
  },
  {
    src: DUMMY_IMAGE_URLS.keys,
    alt: 'Plastic keys on a teething ring.',
    title: 'The Keys',
    price: '£30',
  },
  {
    src: DUMMY_IMAGE_URLS.blocks,

    alt: 'Building block cubes with letter on.',
    title: 'Wood Letters',
    price: '£15',
  },
  {
    src: DUMMY_IMAGE_URLS.teddy,
    alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
    title: 'Teddy Bear',
    price: '£20',
  },
  {
    src: DUMMY_IMAGE_URLS.dinosaur,
    alt: 'A soft gray dinosaur toy',
    title: 'Dino Plush',
    price: '£30',
  },
  {
    src: DUMMY_IMAGE_URLS.keys,
    alt: 'Plastic keys on a teething ring.',
    title: 'The Keys',
    price: '£30',
  },
  {
    src: DUMMY_IMAGE_URLS.blocks,

    alt: 'Building block cubes with letter on.',
    title: 'Wood Letters',
    price: '£15',
  },
  {
    src: DUMMY_IMAGE_URLS.teddy,
    alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
    title: 'Teddy Bear',
    price: '£20',
  },
];

export const CATEGORY_CARD_DATA: CarouselData = {
  title: 'Categories',
  type: CarouselTypes.InImage,
  href: 'products',
  cards: [
    {
      id: 1,
      image: DUMMY_IMAGE_URLS.teddy,
      alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
      title: 'Soft Toys',
      description: '',
      price: undefined,
      link: 'products',
    },
    {
      id: 2,
      image: DUMMY_IMAGE_URLS.blocks,
      alt: 'Building block cubes with letter on.',
      title: 'Wooden Toys',
      description: '',
      price: undefined,
      link: 'products',
    },
    {
      id: 3,
      image: DUMMY_IMAGE_URLS.keys,
      alt: 'Plastic keys on a teething ring.',
      title: 'Plastic Toys',
      description: '',
      price: undefined,
      link: 'products',
    },
    {
      id: 4,
      image: DUMMY_IMAGE_URLS.dinosaur,
      alt: 'A soft gray dinosaur toy',
      title: 'Dinosaur Toys',
      description: '',
      price: undefined,
      link: 'products',
    },
  ],
};

export const CATEGORY_BUTTONS: CarouselData = {
  title: 'Explore',
  type: CarouselTypes.TextButton,
  href: 'products',
  cards: [
    {
      id: 1,
      title: 'Soft Toys',
      link: 'products',
    },
    {
      id: 2,
      title: 'Wooden Toys',
      link: 'products',
    },
    {
      id: 3,
      title: 'Plastic Toys',
      link: 'products',
    },
    {
      id: 4,
      title: 'Dinosaur Toys',
      link: 'products',
    },
  ],
};

export const TOP_SELLERS_DATA: CarouselData = {
  title: 'Top Sellers',
  type: CarouselTypes.TextAndCircleImage,
  href: '/sell',
  cards: [
    {
      id: 1,
      title: 'Cassie Donk',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 2,
      title: 'John Smith',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 3,
      title: 'Jane Doe',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 4,
      title: 'John Doe',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 5,
      title: 'Cassie Donk',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 6,
      title: 'John Smith',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 7,
      title: 'Jane Doe',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 8,
      title: 'John Doe',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 9,
      title: 'Cassie Donk',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 10,
      title: 'John Smith',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 11,
      title: 'Jane Doe',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 12,
      title: 'John Doe',
      image: DUMMY_IMAGE_URLS.seller,
      alt: 'A picture of a person',
      link: 'products',
    },
  ],
};

export const SHOP_LOCAL_CARD_DATA: CarouselData = {
  title: 'Shop Local',
  type: CarouselTypes.TwoRows,
  href: 'products',
  cards: [
    {
      id: 1,
      image: DUMMY_IMAGE_URLS.dinosaur,
      alt: 'A soft gray dinosaur toy',
      title: 'Dino Plush',
      description: '',
      price: 30,
      link: 'products',
    },
    {
      id: 2,
      image: DUMMY_IMAGE_URLS.keys,
      alt: 'Plastic keys on a teething ring.',
      title: 'The Keys',
      description: '',
      price: 30,
      link: 'products',
    },
    {
      id: 3,
      image: DUMMY_IMAGE_URLS.blocks,
      alt: 'Building block cubes with letter on.',
      title: 'Wood Letters',
      description: '',
      price: 15,
      link: 'products',
    },
    {
      id: 4,
      image: DUMMY_IMAGE_URLS.teddy,
      alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
      title: 'Teddy Bear',
      description: '',
      price: 20,
      link: 'products',
    },
  ],
};

export const SPECIAL_PRICES_CARD_DATA: CarouselData = {
  title: 'Special Prices',
  type: CarouselTypes.TwoRows,
  href: 'products',
  cards: [
    {
      id: 1,
      image: DUMMY_IMAGE_URLS.blocks,
      alt: 'Building block cubes with letter on.',
      title: 'Wood Letters',
      description: '',
      price: 15,
      link: 'products',
    },
    {
      id: 2,
      image: DUMMY_IMAGE_URLS.dinosaur,
      alt: 'A soft gray dinosaur toy',
      title: 'Dino Plush',
      description: '',
      price: 30,
      link: 'products',
    },
    {
      id: 3,
      image: DUMMY_IMAGE_URLS.keys,
      alt: 'Plastic keys on a teething ring.',
      title: 'The Keys',
      description: '',
      price: 30,
      link: 'products',
    },
    {
      id: 4,
      image: DUMMY_IMAGE_URLS.teddy,
      alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
      title: 'Teddy Bear',
      description: '',
      price: 20,
      link: 'products',
    },
  ],
};

export const TOYS_AND_GAMES_CARD_DATA: CarouselData = {
  title: 'Toys & Games',
  type: CarouselTypes.SingleRow,
  href: 'products',
  cards: [
    {
      id: 1,
      image: DUMMY_IMAGE_URLS.blocks,
      alt: 'Building block cubes with letter on.',
      title: 'Early play',
      link: 'products',
    },
    {
      id: 2,
      image: DUMMY_IMAGE_URLS.dinosaur,
      alt: 'A soft gray dinosaur toy',
      title: 'Sub category',
      link: 'products',
    },
    {
      id: 3,
      image: DUMMY_IMAGE_URLS.keys,
      alt: 'Plastic keys on a teething ring.',
      title: 'Sub category',
      link: 'products',
    },
    {
      id: 4,
      image: DUMMY_IMAGE_URLS.teddy,
      alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
      title: 'Sub category',
      link: 'products',
    },
  ],
};
