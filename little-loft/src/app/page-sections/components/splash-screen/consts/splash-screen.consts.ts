import {
  SplashScreenInfo,
  SplashScreenTypes,
} from '../models/splash-screen.models';
import { SplashWithActionComponent } from '../components/splash-with-action/splash-with-action.component';
import { SplashWithTextAndImageComponent } from '../components/splash-with-text-and-image/splash-with-text-and-image.component';
import { SplashWithTextComponent } from '../components/splash-with-text/splash-with-text.component';

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
      src: 'https://s3-alpha-sig.figma.com/img/166a/d1d0/3e83b9f139aa18e71773365c9c849519?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vo8TWYfkA3pzV7iKKyXc0DqrvHpU8ooJ1AMlA2UKQxirBZgLBWCJ9ZxDC8uJUJAEaA0-94IthGhYrVoXlJ0pIiNk~-TDRo6V-nSiDWOpF6hXABQZN3ggN8QnwxL51XM-fhIP-GJXlG1Y2sGjxzc74N52dH5q~GSjJ~Z5s9IoCRw3FLGRaXGaZuIjPnhHPrT6-z8cax9~8wMvaBdwOrlRo0-9FvQpxkTj3DwxyQjSMmsfEd5eAPhwtNcBaVz0sR3dwdHyN03AOLOd8DUpJIPJI8VHVA78OtHjfGNW8FXP3VBKDDJSEVczgSzpmIIIpNnmOJYel8wZQoupmiHh88lU~Q__',
      alt: 'Secure your account image',
      color: 'bg-green',
    },
    {
      index: 2,
      type: SplashScreenTypes.TextAndImage,
      header: 'How it works',
      subHeader: 'Duis aute irure dolor in rederit in voluptate',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      step: '02',
      src: 'https://s3-alpha-sig.figma.com/img/ef1e/09f2/45e18ae00fe2c2bbed5e938e4cafd37d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kUYmw3Ph~D8f31lCfXNtsix87a-ZlV-PHGzH7r6r7b7FnTwUdj6M91zPPo3TP0x~Uk~G2LDCt3UTqj8dRc6QXJK8E2610M4v21p6XcCCY6JXGtMAWXXKDiIkdUYnh1WZgPPfxQOVPtYPILHUmVMkQd9JUUebkjsqJcDojVeX8oLEny2VyGU0BT9grNqP0CPh4ExAMiSBj1RFbMjiZSN3-ed-BCwyCxzRQDva9jpcHuxmFP0Q9Xgnxk34RQiPiBsM4S21mpr6qHhiZhTaTnZlea5UwXRXAkiyNtR0a59ih~ACx9mpb4n4c~p9yvaGighrzzS06cgFtpgN06vPyZgf8g__',
      alt: 'Secure your account image',
      color: 'bg-blue',
    },
    {
      index: 3,
      type: SplashScreenTypes.TextAndImage,
      header: 'How it works',
      subHeader: 'Excepteur sint occaecat idatat non proident',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      step: '03',
      src: 'https://s3-alpha-sig.figma.com/img/121a/9341/3670f1aec7e4046218d8f37923b22593?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ahcp1lsa8vi2Zvrj5SV~yRugJbdWhwFsGQd0Ih7CtckSRaP5W5QGH9k9nBe4Wyo~QfT7~cDqT7pY6EkfbYBm7D1pnjgLqVyJbmeTqqAhp1tcwPOCm5ATcbxAT2uLfL804cQ91YNfu2ziJJFICj6cxjg~RvzUXmQDVGnonR9qI~Ml~A9GGB19NNUg~XbkihnGUr9lC26g8towIcCBqtBW3ZNeqr1SEM-XGmp6ij5iR-RYWp3syJOZqza~Fbjt5LriUvYVgP1Owx4CihTKHnKY7e4b6AtiyniL~oyuKQYf5AF2e3PmHZD2B08Vki47QiAE4h7xCMb0Wim4VAvDUpe6ig__',
      alt: 'Secure your account image',
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

type SplashScreenComponentsUnion =
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
