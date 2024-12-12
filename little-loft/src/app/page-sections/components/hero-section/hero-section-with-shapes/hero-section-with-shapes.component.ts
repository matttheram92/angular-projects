import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section-with-shapes',
  templateUrl: './hero-section-with-shapes.component.html',
  styleUrls: ['./hero-section-with-shapes.component.scss'],
})
export class HeroSectionWithShapesComponent {
  constructor(private router: Router) {}

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
