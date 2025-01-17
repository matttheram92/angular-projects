import { Component, Input, OnInit } from '@angular/core';
import { CarouselCard } from '../carousel/models/carousel.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
  standalone: false,
})
export class ImageCardComponent implements OnInit {
  @Input() item!: CarouselCard;
  @Input() inImage: boolean = false;

  ngOnInit(): void {}

  get isSingleLine(): boolean {
    return !this.item.price;
  }
}
