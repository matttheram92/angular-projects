import { Component } from '@angular/core';
import { isMobileView } from '@app/core/services/breakpoint.service';
import { ONBOARDING_SPLASH_SCREEN_DATA } from '@app/page-sections/components/splash-screen/consts/splash-screen.consts';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: false,
})
export class OnboardingComponent {
  public splashScreenInfo = ONBOARDING_SPLASH_SCREEN_DATA;
  public isMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.updateBreakpoint();
    window.addEventListener('resize', () => this.updateBreakpoint());
  }

  private updateBreakpoint(): void {
    this.isMobile = isMobileView();
  }
}
