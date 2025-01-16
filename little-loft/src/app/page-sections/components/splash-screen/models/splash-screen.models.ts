export enum SplashScreenTypes {
  Text = 'text',
  TextAndImage = 'text-and-image',
  Action = 'action',
}

export interface SplashScreenSectionBase {
  index: number;
  type: SplashScreenTypes;
  header: string;
  subHeader: string;
  body: string;
}

export interface SplashScreenWithText extends SplashScreenSectionBase {
  type: SplashScreenTypes.Text;
}

export interface SplashScreenWithTextAndImage extends SplashScreenSectionBase {
  type: SplashScreenTypes.TextAndImage;
  step: string;
  src: string;
  alt: string;
  color: string;
  icon: string;
}

export interface SplashScreenWithAction extends SplashScreenSectionBase {
  type: SplashScreenTypes.Action;
  actionText: string;
  actionHref: string;
}

export type SplashScreenSection =
  | SplashScreenWithText
  | SplashScreenWithTextAndImage
  | SplashScreenWithAction;

export interface SplashScreenInfo {
  title: string;
  sections: SplashScreenSection[];
}
