import { Component, Inject } from '@angular/core';
import { SplashScreenWithAction } from '../../models/splash-screen.models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-splash-with-action',
    templateUrl: './splash-with-action.component.html',
    styleUrls: ['./splash-with-action.component.scss'],
    standalone: false
})
export class SplashWithActionComponent {
  constructor(
    @Inject('sectionData') public sectionData: SplashScreenWithAction,
    private router: Router
  ) {}

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
