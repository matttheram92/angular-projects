import { Component } from '@angular/core';
import { ONBOARDING_SPLASH_SCREEN_DATA } from 'src/app/page-sections/components/splash-screen/consts/splash-screen.consts';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
  public splashScreenInfo = ONBOARDING_SPLASH_SCREEN_DATA;
}
