import { Component, Input } from '@angular/core';
import { CarouselCard } from '../carousel/models/carousel.model';

@Component({
  selector: 'app-image-circle-card',
  templateUrl: './image-circle-card.component.html',
  styleUrl: './image-circle-card.component.scss',
  standalone: false,
})
export class ImageCircleCardComponent {
  @Input() item!: CarouselCard;
}
