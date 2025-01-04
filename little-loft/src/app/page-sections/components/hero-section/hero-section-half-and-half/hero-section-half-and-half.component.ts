import { Component } from '@angular/core';
import { DUMMY_IMAGE_URLS } from 'src/app/helpers/consts/dummy-images.consts';

@Component({
  selector: 'app-hero-section-half-and-half',
  templateUrl: './hero-section-half-and-half.component.html',
  styleUrls: ['./hero-section-half-and-half.component.scss'],
})
export class HeroSectionHalfAndHalfComponent {
  imageSrc: string = DUMMY_IMAGE_URLS.room;
}
