import { Component, Inject } from '@angular/core';
import { SplashScreenWithText } from '../../models/splash-screen.models';

@Component({
  selector: 'app-splash-with-text',
  templateUrl: './splash-with-text.component.html',
  styleUrls: ['./splash-with-text.component.scss'],
})
export class SplashWithTextComponent {
  constructor(@Inject('sectionData') public sectionData: SplashScreenWithText) {}
}
