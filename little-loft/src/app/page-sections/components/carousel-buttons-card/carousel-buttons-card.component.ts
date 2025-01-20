import { Component, Inject } from '@angular/core';
import { CarouselCard } from '../carousel/models/carousel.model';

@Component({
  selector: 'app-carousel-buttons-card',
  templateUrl: './carousel-buttons-card.component.html',
  styleUrl: './carousel-buttons-card.component.scss',
  standalone: false,
})
export class CarouselButtonsCardComponent {
  constructor(@Inject('item') public item: CarouselCard) {}
}
