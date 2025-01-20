import { Component, Inject, OnInit } from '@angular/core';
import { CarouselCard, CarouselTypes } from '../carousel/models/carousel.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
  standalone: false,
})
export class ImageCardComponent implements OnInit {
  constructor(
    @Inject('item') public item: CarouselCard,
    @Inject('type') public type: CarouselTypes
  ) {}

  ngOnInit(): void {}

  get isSingleLine(): boolean {
    return this.type === CarouselTypes.SingleRow;
  }

  get inImage(): boolean {
    return this.type === CarouselTypes.InImage;
  }
}
