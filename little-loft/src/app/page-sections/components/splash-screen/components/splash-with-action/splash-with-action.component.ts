import { Component, Inject } from '@angular/core';
import { SplashScreenWithAction } from '../../models/splash-screen.models';

@Component({
  selector: 'app-splash-with-action',
  templateUrl: './splash-with-action.component.html',
  styleUrls: ['./splash-with-action.component.scss'],
})
export class SplashWithActionComponent {
  constructor(
    @Inject('sectionData') public sectionData: SplashScreenWithAction
  ) {}
}
