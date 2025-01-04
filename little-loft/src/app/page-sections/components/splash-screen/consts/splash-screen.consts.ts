import {
  SplashScreenInfo,
  SplashScreenTypes,
} from '../models/splash-screen.models';
import { SplashWithActionComponent } from '../components/splash-with-action/splash-with-action.component';
import { SplashWithTextAndImageComponent } from '../components/splash-with-text-and-image/splash-with-text-and-image.component';
import { SplashWithTextComponent } from '../components/splash-with-text/splash-with-text.component';
import { DUMMY_IMAGE_URLS } from 'src/app/helpers/consts/dummy-images.consts';

export const ONBOARDING_SPLASH_SCREEN_DATA: SplashScreenInfo = {
  title: 'Welcome to Our App',
  sections: [
    {
      index: 0,
      type: SplashScreenTypes.Text,
      header: 'Welcome',
      subHeader:
        "The number one marketplace for second hand baby and children's toys and accessories in the world",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      index: 1,
      type: SplashScreenTypes.TextAndImage,
      header: 'How it works',
      subHeader: "Sell your second hand baby and children's toys",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      step: '01',
      src: DUMMY_IMAGE_URLS.teddy,
      alt: 'An image of a cuddly toy',
      color: 'bg-green',
    },
    {
      index: 2,
      type: SplashScreenTypes.TextAndImage,
      header: 'How it works',
      subHeader: 'Duis aute irure dolor in rederit in voluptate',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      step: '02',
      src: DUMMY_IMAGE_URLS.childsRoomCrop,
      alt: 'An image of a childs room',
      color: 'bg-blue',
    },
    {
      index: 3,
      type: SplashScreenTypes.TextAndImage,
      header: 'How it works',
      subHeader: 'Excepteur sint occaecat idatat non proident',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      step: '03',
      src: DUMMY_IMAGE_URLS.dinosaur,
      alt: 'An image of a soft dinosaur',
      color: 'bg-purple',
    },
    {
      index: 4,
      type: SplashScreenTypes.Action,
      header: 'Ready to go',
      subHeader: 'Lorem ipsum magna aliqua enim ad minim  ',
      body: '',
      actionText: 'Come In',
      actionHref: '/home',
    },
  ],
};

export type SplashScreenComponentsUnion =
  | typeof SplashWithTextComponent
  | typeof SplashWithTextAndImageComponent
  | typeof SplashWithActionComponent;

export const SPLASH_SCREEN_COMPONENTS: Record<
  SplashScreenTypes,
  SplashScreenComponentsUnion
> = {
  [SplashScreenTypes.Text]: SplashWithTextComponent,
  [SplashScreenTypes.TextAndImage]: SplashWithTextAndImageComponent,
  [SplashScreenTypes.Action]: SplashWithActionComponent,
};
