import { Component } from '@angular/core';
import { DUMMY_IMAGE_URLS } from 'src/app/helpers/consts/dummy-images.consts';

@Component({
  selector: 'app-hero-section-with-image',
  templateUrl: './hero-section-with-image.component.html',
  styleUrls: ['./hero-section-with-image.component.scss'],
})
export class HeroSectionWithImageComponent {
  imageSrc: string = DUMMY_IMAGE_URLS.childsRoom;
}
