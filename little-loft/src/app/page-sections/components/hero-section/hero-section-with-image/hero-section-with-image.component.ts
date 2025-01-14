import { Component, Inject } from '@angular/core';
import { DashboardHeroImage } from '../../dashboard/models/dashboard.models';

@Component({
  selector: 'app-hero-section-with-image',
  templateUrl: './hero-section-with-image.component.html',
  styleUrls: ['./hero-section-with-image.component.scss'],
  standalone: false,
})
export class HeroSectionWithImageComponent {
  constructor(@Inject('sectionData') public sectionData: DashboardHeroImage) {}
}
