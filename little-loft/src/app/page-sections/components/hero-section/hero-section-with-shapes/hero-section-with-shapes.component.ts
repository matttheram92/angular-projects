import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardHeroShapes } from '../../dashboard/models/dashboard.models';

@Component({
  selector: 'app-hero-section-with-shapes',
  templateUrl: './hero-section-with-shapes.component.html',
  styleUrls: ['./hero-section-with-shapes.component.scss'],
  standalone: false,
})
export class HeroSectionWithShapesComponent {
  constructor(
    private router: Router,
    @Inject('sectionData') public sectionData: DashboardHeroShapes
  ) {}

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
