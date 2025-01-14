import { Component, Input, OnInit } from '@angular/core';
import {
  SplashScreenInfo,
  SplashScreenTypes,
  SplashScreenWithTextAndImage,
} from '../../splash-screen/models/splash-screen.models';

@Component({
  selector: 'app-hero-section-with-cards',
  templateUrl: './hero-section-with-cards.component.html',
  styleUrls: ['./hero-section-with-cards.component.scss'],
  standalone: false,
})
export class HeroSectionWithCardsComponent implements OnInit {
  constructor() {}

  @Input() public splashScreenInfo!: SplashScreenInfo;
  public subHeader: string = '';
  public bullets: SplashScreenWithTextAndImage[] = [];

  ngOnInit(): void {
    this.subHeader = this.splashScreenInfo.sections[0].subHeader;
    this.bullets = this.splashScreenInfo.sections.filter(
      (s) => s.type === SplashScreenTypes.TextAndImage
    );
  }
}
