import {
  CarouselData,
  CarouselTypes,
} from 'src/app/page-sections/components/carousel/models/carousel.model';
import { ProductItem } from '../models/product-list.models';

export const PRODUCT_EXAMPLE_DATA: ProductItem[] = [
  {
    src: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    title: 'Earthen Bottle',
    price: '$48',
  },
  {
    src: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    alt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    title: 'Nomad Tumbler',
    price: '$35',
  },
  {
    src: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
    alt: 'Person using a pen to cross a task off a productivity paper card.',
    title: 'Focus Paper Refill',
    price: '$89',
  },
  {
    src: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
    alt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    title: 'Machined Mechanical Pencil',
    price: '$35',
  },
  {
    src: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    title: 'Earthen Bottle',
    price: '$48',
  },
  {
    src: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    alt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    title: 'Nomad Tumbler',
    price: '$35',
  },
  {
    src: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
    alt: 'Person using a pen to cross a task off a productivity paper card.',
    title: 'Focus Paper Refill',
    price: '$89',
  },
  {
    src: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
    alt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    title: 'Machined Mechanical Pencil',
    price: '$35',
  },
];

export const CATEGORY_CARD_DATA: CarouselData = {
  title: 'Categories',
  type: CarouselTypes.InImage,
  href: 'products',
  cards: [
    {
      id: 1,
      image:
        'https://s3-alpha-sig.figma.com/img/ced4/ef41/e638ba69136c864472c3ebaf581cf576?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9yIp5aM1hdYUz2zeftsOzwNaS-eiYd43VWa8Sl6q-t3N0XQbbynLh79AGXqvotNWOH2cnOrRC9QugvIvAHOOV-os5IhFHdatW1bbWnQtdLDqW-nNwfHbdwKsC34aa-2vy-WtbT2qW75qBH05aQQzuhdgWZxXBX12mDcocPq1pzqrR7SGxfNSb5W7I74CPXVNsdvAFEjUmTHK9JLw-hf0ypDvf-0JsjVce73JiBIiW9QQa7~Ci6BHnxN4k~Cjz92vVtyuIld0atDjV3ZTpW~7wq3HkG7wvanTxDH~T45k-Do2-f36rUuTUKPCG498Kk6Jo4YVK0sv9UWshW5y7FwGg__',
      alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
      title: 'Soft Toys',
      description: '',
      price: undefined,
      link: 'products',
    },
    {
      id: 2,
      image:
        'https://s3-alpha-sig.figma.com/img/bd60/7f20/88e97f5b71a35fbc2c1e8be95a90e6a7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AgueS8cTHtP9neaQ3nrW5aaAKETY3F~xfU9rZyz~0KYvEWtsbIKnwpy50At1zKAl5bH8GuWFWKp7yKg4xXHk9CYxizgl-tAN3kmW8Jma~tsNYMUTlE2OrA7kYUjgf-g3S-tlz7mH9cQ0J7xkHEZzW9gglIZ8ScJ1LZqnUXNhnSFWK6GM1txp3F63rVOkbsGVN1HDWGVRarBYRxt36L2l6P7gd1CsTUtFWoEh4v5A8wgwGN8BPWzA99iAnBRy~qvLtGnlZ0TtKhFGUnWin0xNOBo3enIqfGlrAT0xDGLr22lx6ImKtGcac-FAgDapCF769QnpLBkZu1hgDwBTrdJEHw__',
      alt: 'Building block cubes with letter on.',
      title: 'Wooden Toys',
      description: '',
      price: undefined,
      link: 'products',
    },
    {
      id: 3,
      image:
        'https://s3-alpha-sig.figma.com/img/0ad3/07c7/85ebd3210368d63d64c22bf238ae8780?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eBC07FZVz8HALoa3qDqV1AJprA5r9QwxSlruzlJmkyOIA2vzqm8~sqq4mZmWKuEYDmYeAm0ussrXJFrWhVkVyRQuyTlDy4APbTVTeMCMmve-9XdrjV2lYYN5YKKtYeYlfRimhIYmDjubIaj7N8wsL2Zr1jUXbrEWnyhCXt21w9apAPTGy85NqJ6S7YQNUeOfGiiRlq3qV25lq182cF94ncKS2A5eoia7eUqpLN1R5--iIWK-UM9VZlbWXKQ00-9X7F8X09UFMkcQc1IVkuAVpRLSPzFjadWQIQ2vFQGXt3z0Ac60KMlFNM99UyJkIGYxVMTG3LABvqefE4FE8hbwQA__',
      alt: 'Plastic keys on a teething ring.',
      title: 'Plastic Toys',
      description: '',
      price: undefined,
      link: 'products',
    },
    {
      id: 4,
      image:
        'https://s3-alpha-sig.figma.com/img/803c/00a0/45be50afb8a28d4cdd5cd7b5ba2b9fad?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ed8pOUeLyy~RdF0b5Au0G-DOp~8NbqyhvpAGJDWj2zrv6PrfvtSrdf4t3U65qOU8EKI-VUtiE0MohyzpWUBRbnkdNsjyQz2Z8IpPxDhDyBdbKJ68WfcOPQxmk9Cp-vfGKLOO6gCp5z2FXPDns4ivi2tcGhJX9UztbMopkTbnORj9atFs7Le1Q76eXmF-xlRwkL~MIr2apOXaGwUCORwXVdGXj6pujWI5Rfcj6E0ItfpCVBSVOOFi8rlN2mdqFgsC2hVR6cQ2iNP4KaDgGs53DuQ4i5xGIErVc4ZddvKcmXh1F9Q08z4seH8vAae8UyO6jGQGyesd4R76JXtKnfeeaw__',
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
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 2,
      title: 'John Smith',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 3,
      title: 'Jane Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 4,
      title: 'John Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 5,
      title: 'Cassie Donk',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 6,
      title: 'John Smith',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 7,
      title: 'Jane Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 8,
      title: 'John Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 9,
      title: 'Cassie Donk',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 10,
      title: 'John Smith',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 11,
      title: 'Jane Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
      alt: 'A picture of a person',
      link: 'products',
    },
    {
      id: 12,
      title: 'John Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/116c/e044/5f65cde349a5d8327a8f3d79f0492540?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPMxEYqiJtX0pyTAJnMyICLZFORdL~llra2Y~-aIUTdRfIZSmEAlZMg~w0fqap~poWnwn5MIb75eQihF~NQD0j6Re3-22c9Y6ymTCaY9iVBSTt8xu~0cJp~L4IolafKadZI68RKZeSCG1cxVqsQjcoEtbtdKiiyengTUhidCFzpafvSral0sHwplaYoGHXO2Je~Y0DbM1XRZBNHMc5gkTRSf97yZin3BuHv5up5~MAHE9U984XdyZyFxQYuVidxPtcpJUvFEXn~cH4noKjc6vlKseP~QDqKleDxKIyzbC4awbctYJHeUBJDbQWndxVAITnb6Wez-2pssDExHDQE6g__',
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
      image:
        'https://s3-alpha-sig.figma.com/img/803c/00a0/45be50afb8a28d4cdd5cd7b5ba2b9fad?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ed8pOUeLyy~RdF0b5Au0G-DOp~8NbqyhvpAGJDWj2zrv6PrfvtSrdf4t3U65qOU8EKI-VUtiE0MohyzpWUBRbnkdNsjyQz2Z8IpPxDhDyBdbKJ68WfcOPQxmk9Cp-vfGKLOO6gCp5z2FXPDns4ivi2tcGhJX9UztbMopkTbnORj9atFs7Le1Q76eXmF-xlRwkL~MIr2apOXaGwUCORwXVdGXj6pujWI5Rfcj6E0ItfpCVBSVOOFi8rlN2mdqFgsC2hVR6cQ2iNP4KaDgGs53DuQ4i5xGIErVc4ZddvKcmXh1F9Q08z4seH8vAae8UyO6jGQGyesd4R76JXtKnfeeaw__',
      alt: 'A soft gray dinosaur toy',
      title: 'Dino Plush',
      description: '',
      price: 30,
      link: 'products',
    },
    {
      id: 2,
      image:
        'https://s3-alpha-sig.figma.com/img/0ad3/07c7/85ebd3210368d63d64c22bf238ae8780?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eBC07FZVz8HALoa3qDqV1AJprA5r9QwxSlruzlJmkyOIA2vzqm8~sqq4mZmWKuEYDmYeAm0ussrXJFrWhVkVyRQuyTlDy4APbTVTeMCMmve-9XdrjV2lYYN5YKKtYeYlfRimhIYmDjubIaj7N8wsL2Zr1jUXbrEWnyhCXt21w9apAPTGy85NqJ6S7YQNUeOfGiiRlq3qV25lq182cF94ncKS2A5eoia7eUqpLN1R5--iIWK-UM9VZlbWXKQ00-9X7F8X09UFMkcQc1IVkuAVpRLSPzFjadWQIQ2vFQGXt3z0Ac60KMlFNM99UyJkIGYxVMTG3LABvqefE4FE8hbwQA__',
      alt: 'Plastic keys on a teething ring.',
      title: 'The Keys',
      description: '',
      price: 30,
      link: 'products',
    },
    {
      id: 3,
      image:
        'https://s3-alpha-sig.figma.com/img/bd60/7f20/88e97f5b71a35fbc2c1e8be95a90e6a7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AgueS8cTHtP9neaQ3nrW5aaAKETY3F~xfU9rZyz~0KYvEWtsbIKnwpy50At1zKAl5bH8GuWFWKp7yKg4xXHk9CYxizgl-tAN3kmW8Jma~tsNYMUTlE2OrA7kYUjgf-g3S-tlz7mH9cQ0J7xkHEZzW9gglIZ8ScJ1LZqnUXNhnSFWK6GM1txp3F63rVOkbsGVN1HDWGVRarBYRxt36L2l6P7gd1CsTUtFWoEh4v5A8wgwGN8BPWzA99iAnBRy~qvLtGnlZ0TtKhFGUnWin0xNOBo3enIqfGlrAT0xDGLr22lx6ImKtGcac-FAgDapCF769QnpLBkZu1hgDwBTrdJEHw__',
      alt: 'Building block cubes with letter on.',
      title: 'Wood Letters',
      description: '',
      price: 15,
      link: 'products',
    },
    {
      id: 4,
      image:
        'https://s3-alpha-sig.figma.com/img/ced4/ef41/e638ba69136c864472c3ebaf581cf576?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9yIp5aM1hdYUz2zeftsOzwNaS-eiYd43VWa8Sl6q-t3N0XQbbynLh79AGXqvotNWOH2cnOrRC9QugvIvAHOOV-os5IhFHdatW1bbWnQtdLDqW-nNwfHbdwKsC34aa-2vy-WtbT2qW75qBH05aQQzuhdgWZxXBX12mDcocPq1pzqrR7SGxfNSb5W7I74CPXVNsdvAFEjUmTHK9JLw-hf0ypDvf-0JsjVce73JiBIiW9QQa7~Ci6BHnxN4k~Cjz92vVtyuIld0atDjV3ZTpW~7wq3HkG7wvanTxDH~T45k-Do2-f36rUuTUKPCG498Kk6Jo4YVK0sv9UWshW5y7FwGg__',
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
      image:
        'https://s3-alpha-sig.figma.com/img/bd60/7f20/88e97f5b71a35fbc2c1e8be95a90e6a7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AgueS8cTHtP9neaQ3nrW5aaAKETY3F~xfU9rZyz~0KYvEWtsbIKnwpy50At1zKAl5bH8GuWFWKp7yKg4xXHk9CYxizgl-tAN3kmW8Jma~tsNYMUTlE2OrA7kYUjgf-g3S-tlz7mH9cQ0J7xkHEZzW9gglIZ8ScJ1LZqnUXNhnSFWK6GM1txp3F63rVOkbsGVN1HDWGVRarBYRxt36L2l6P7gd1CsTUtFWoEh4v5A8wgwGN8BPWzA99iAnBRy~qvLtGnlZ0TtKhFGUnWin0xNOBo3enIqfGlrAT0xDGLr22lx6ImKtGcac-FAgDapCF769QnpLBkZu1hgDwBTrdJEHw__',
      alt: 'Building block cubes with letter on.',
      title: 'Wood Letters',
      description: '',
      price: 15,
      link: 'products',
    },
    {
      id: 2,
      image:
        'https://s3-alpha-sig.figma.com/img/803c/00a0/45be50afb8a28d4cdd5cd7b5ba2b9fad?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ed8pOUeLyy~RdF0b5Au0G-DOp~8NbqyhvpAGJDWj2zrv6PrfvtSrdf4t3U65qOU8EKI-VUtiE0MohyzpWUBRbnkdNsjyQz2Z8IpPxDhDyBdbKJ68WfcOPQxmk9Cp-vfGKLOO6gCp5z2FXPDns4ivi2tcGhJX9UztbMopkTbnORj9atFs7Le1Q76eXmF-xlRwkL~MIr2apOXaGwUCORwXVdGXj6pujWI5Rfcj6E0ItfpCVBSVOOFi8rlN2mdqFgsC2hVR6cQ2iNP4KaDgGs53DuQ4i5xGIErVc4ZddvKcmXh1F9Q08z4seH8vAae8UyO6jGQGyesd4R76JXtKnfeeaw__',
      alt: 'A soft gray dinosaur toy',
      title: 'Dino Plush',
      description: '',
      price: 30,
      link: 'products',
    },
    {
      id: 3,
      image:
        'https://s3-alpha-sig.figma.com/img/0ad3/07c7/85ebd3210368d63d64c22bf238ae8780?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eBC07FZVz8HALoa3qDqV1AJprA5r9QwxSlruzlJmkyOIA2vzqm8~sqq4mZmWKuEYDmYeAm0ussrXJFrWhVkVyRQuyTlDy4APbTVTeMCMmve-9XdrjV2lYYN5YKKtYeYlfRimhIYmDjubIaj7N8wsL2Zr1jUXbrEWnyhCXt21w9apAPTGy85NqJ6S7YQNUeOfGiiRlq3qV25lq182cF94ncKS2A5eoia7eUqpLN1R5--iIWK-UM9VZlbWXKQ00-9X7F8X09UFMkcQc1IVkuAVpRLSPzFjadWQIQ2vFQGXt3z0Ac60KMlFNM99UyJkIGYxVMTG3LABvqefE4FE8hbwQA__',
      alt: 'Plastic keys on a teething ring.',
      title: 'The Keys',
      description: '',
      price: 30,
      link: 'products',
    },
    {
      id: 4,
      image:
        'https://s3-alpha-sig.figma.com/img/ced4/ef41/e638ba69136c864472c3ebaf581cf576?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9yIp5aM1hdYUz2zeftsOzwNaS-eiYd43VWa8Sl6q-t3N0XQbbynLh79AGXqvotNWOH2cnOrRC9QugvIvAHOOV-os5IhFHdatW1bbWnQtdLDqW-nNwfHbdwKsC34aa-2vy-WtbT2qW75qBH05aQQzuhdgWZxXBX12mDcocPq1pzqrR7SGxfNSb5W7I74CPXVNsdvAFEjUmTHK9JLw-hf0ypDvf-0JsjVce73JiBIiW9QQa7~Ci6BHnxN4k~Cjz92vVtyuIld0atDjV3ZTpW~7wq3HkG7wvanTxDH~T45k-Do2-f36rUuTUKPCG498Kk6Jo4YVK0sv9UWshW5y7FwGg__',
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
      image:
        'https://s3-alpha-sig.figma.com/img/bd60/7f20/88e97f5b71a35fbc2c1e8be95a90e6a7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AgueS8cTHtP9neaQ3nrW5aaAKETY3F~xfU9rZyz~0KYvEWtsbIKnwpy50At1zKAl5bH8GuWFWKp7yKg4xXHk9CYxizgl-tAN3kmW8Jma~tsNYMUTlE2OrA7kYUjgf-g3S-tlz7mH9cQ0J7xkHEZzW9gglIZ8ScJ1LZqnUXNhnSFWK6GM1txp3F63rVOkbsGVN1HDWGVRarBYRxt36L2l6P7gd1CsTUtFWoEh4v5A8wgwGN8BPWzA99iAnBRy~qvLtGnlZ0TtKhFGUnWin0xNOBo3enIqfGlrAT0xDGLr22lx6ImKtGcac-FAgDapCF769QnpLBkZu1hgDwBTrdJEHw__',
      alt: 'Building block cubes with letter on.',
      title: 'Early play',
      link: 'products',
    },
    {
      id: 2,
      image:
        'https://s3-alpha-sig.figma.com/img/803c/00a0/45be50afb8a28d4cdd5cd7b5ba2b9fad?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ed8pOUeLyy~RdF0b5Au0G-DOp~8NbqyhvpAGJDWj2zrv6PrfvtSrdf4t3U65qOU8EKI-VUtiE0MohyzpWUBRbnkdNsjyQz2Z8IpPxDhDyBdbKJ68WfcOPQxmk9Cp-vfGKLOO6gCp5z2FXPDns4ivi2tcGhJX9UztbMopkTbnORj9atFs7Le1Q76eXmF-xlRwkL~MIr2apOXaGwUCORwXVdGXj6pujWI5Rfcj6E0ItfpCVBSVOOFi8rlN2mdqFgsC2hVR6cQ2iNP4KaDgGs53DuQ4i5xGIErVc4ZddvKcmXh1F9Q08z4seH8vAae8UyO6jGQGyesd4R76JXtKnfeeaw__',
      alt: 'A soft gray dinosaur toy',
      title: 'Sub category',
      link: 'products',
    },
    {
      id: 3,
      image:
        'https://s3-alpha-sig.figma.com/img/0ad3/07c7/85ebd3210368d63d64c22bf238ae8780?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eBC07FZVz8HALoa3qDqV1AJprA5r9QwxSlruzlJmkyOIA2vzqm8~sqq4mZmWKuEYDmYeAm0ussrXJFrWhVkVyRQuyTlDy4APbTVTeMCMmve-9XdrjV2lYYN5YKKtYeYlfRimhIYmDjubIaj7N8wsL2Zr1jUXbrEWnyhCXt21w9apAPTGy85NqJ6S7YQNUeOfGiiRlq3qV25lq182cF94ncKS2A5eoia7eUqpLN1R5--iIWK-UM9VZlbWXKQ00-9X7F8X09UFMkcQc1IVkuAVpRLSPzFjadWQIQ2vFQGXt3z0Ac60KMlFNM99UyJkIGYxVMTG3LABvqefE4FE8hbwQA__',
      alt: 'Plastic keys on a teething ring.',
      title: 'Sub category',
      link: 'products',
    },
    {
      id: 4,
      image:
        'https://s3-alpha-sig.figma.com/img/ced4/ef41/e638ba69136c864472c3ebaf581cf576?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9yIp5aM1hdYUz2zeftsOzwNaS-eiYd43VWa8Sl6q-t3N0XQbbynLh79AGXqvotNWOH2cnOrRC9QugvIvAHOOV-os5IhFHdatW1bbWnQtdLDqW-nNwfHbdwKsC34aa-2vy-WtbT2qW75qBH05aQQzuhdgWZxXBX12mDcocPq1pzqrR7SGxfNSb5W7I74CPXVNsdvAFEjUmTHK9JLw-hf0ypDvf-0JsjVce73JiBIiW9QQa7~Ci6BHnxN4k~Cjz92vVtyuIld0atDjV3ZTpW~7wq3HkG7wvanTxDH~T45k-Do2-f36rUuTUKPCG498Kk6Jo4YVK0sv9UWshW5y7FwGg__',
      alt: 'A bear with a stripy head and legs and a teething ring on its arm.',
      title: 'Sub category',
      link: 'products',
    },
  ],
};
