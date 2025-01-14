import { Component, Inject } from '@angular/core';
import { SplashScreenWithTextAndImage } from '../../models/splash-screen.models';

@Component({
    selector: 'app-splash-with-text-and-image',
    templateUrl: './splash-with-text-and-image.component.html',
    styleUrls: ['./splash-with-text-and-image.component.scss'],
    standalone: false
})
export class SplashWithTextAndImageComponent {
  constructor(
    @Inject('sectionData') public sectionData: SplashScreenWithTextAndImage
  ) {}
}
