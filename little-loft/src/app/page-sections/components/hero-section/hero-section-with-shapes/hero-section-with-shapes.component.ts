import { Component, Inject } from '@angular/core';
import { DashboardHeroShapes } from '../../dashboard/models/dashboard.models';

@Component({
  selector: 'app-hero-section-with-shapes',
  templateUrl: './hero-section-with-shapes.component.html',
  styleUrls: ['./hero-section-with-shapes.component.scss'],
  standalone: false,
})
export class HeroSectionWithShapesComponent {
  constructor(@Inject('sectionData') public sectionData: DashboardHeroShapes) {}
}
