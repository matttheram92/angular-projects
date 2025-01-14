import {
  CarouselCard,
  CarouselData,
  CarouselTypes,
} from '@app/page-sections/components/carousel/models/carousel.model';
import { DUMMY_IMAGE_URLS } from './dummy-images.consts';
import { Seller } from '../models/seller.models';
import { ProductItem } from '../models/product-list.models';

const SELLERS_EXAMPLE_DATA: Seller[] = [
  {
    id: 1,
    name: 'Cassie Donk',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 2,
    name: 'John Smith',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 3,
    name: 'Jane Doe',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 4,
    name: 'John Doe',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 5,
    name: 'Cassie Donk',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 6,
    name: 'John Smith',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 7,
    name: 'Jane Doe',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 8,
    name: 'John Doe',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 9,
    name: 'Cassie Donk',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 10,
    name: 'John Smith',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 11,
    name: 'Jane Doe',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
  {
    id: 12,
    name: 'John Doe',
    imageSrc: DUMMY_IMAGE_URLS.seller,
  },
];

export const PRODUCT_EXAMPLE_DATA: ProductItem[] = [
  {
    id: 1,
    src: DUMMY_IMAGE_URLS.dinosaur,
    alt: 'A soft gray dinosaur toy',
    title:
      'Dino Plush - a gray cuddly toy with a spike on its head and a black patch on its belly',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£30',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 2,
    src: DUMMY_IMAGE_URLS.keys,
    alt: 'Plastic keys on a teething ring.',
    title: 'The Keys',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£30',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 3,
    src: DUMMY_IMAGE_URLS.blocks,
    alt: 'Building block cubes with letter on.',
    title: 'Wood Letters',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£15',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 4,
    src: DUMMY_IMAGE_URLS.teddy,
    alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
    title: 'Teddy Bear',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£20',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 5,
    src: DUMMY_IMAGE_URLS.dinosaur,
    alt: 'A soft gray dinosaur toy',
    title: 'Dino Plush',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£30',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 6,
    src: DUMMY_IMAGE_URLS.keys,
    alt: 'Plastic keys on a teething ring.',
    title: 'The Keys',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£30',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 7,
    src: DUMMY_IMAGE_URLS.blocks,
    alt: 'Building block cubes with letter on.',
    title: 'Wood Letters',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£15',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 8,
    src: DUMMY_IMAGE_URLS.teddy,
    alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
    title: 'Teddy Bear',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£20',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 9,
    src: DUMMY_IMAGE_URLS.dinosaur,
    alt: 'A soft gray dinosaur toy',
    title: 'Dino Plush',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£30',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 10,
    src: DUMMY_IMAGE_URLS.keys,
    alt: 'Plastic keys on a teething ring.',
    title: 'The Keys',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£30',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 11,
    src: DUMMY_IMAGE_URLS.blocks,
    alt: 'Building block cubes with letter on.',
    title: 'Wood Letters',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£15',
    seller: SELLERS_EXAMPLE_DATA[0],
  },
  {
    id: 12,
    src: DUMMY_IMAGE_URLS.teddy,
    alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
    title: 'Teddy Bear',
    subtitle:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.',
    price: '£20',
    seller: SELLERS_EXAMPLE_DATA[0],
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
  cards: SELLERS_EXAMPLE_DATA.map(
    (seller): CarouselCard => ({
      id: seller.id,
      title: seller.name,
      image: seller.imageSrc,
      alt: 'A picture of the seller of the product',
      link: 'products',
    })
  ),
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
