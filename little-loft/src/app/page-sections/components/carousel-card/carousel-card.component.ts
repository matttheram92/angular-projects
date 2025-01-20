import { Component, Injector, Input, OnInit } from '@angular/core';
import { CarouselCard, CarouselTypes } from '../carousel/models/carousel.model';
import {
  CAROUSEL_CARD_COMPONENTS,
  CarouselCardComponetsUnion,
} from '../carousel/consts/carousel.const';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss',
  standalone: false,
})
export class CarouselCardComponent implements OnInit {
  @Input() public card!: CarouselCard;
  @Input() public type!: CarouselTypes;
  public currentComponentType!: CarouselCardComponetsUnion;
  public injectorCard!: Injector;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.currentComponentType = this.getComponentType(this.type);
    this.injectorCard = this.getInjector(this.card);
  }

  private getComponentType(type: CarouselTypes): CarouselCardComponetsUnion {
    return CAROUSEL_CARD_COMPONENTS[type];
  }

  public getInjector(card: CarouselCard): Injector {
    return Injector.create({
      providers: [
        { provide: 'item', useValue: card },
        { provide: 'type', useValue: this.type },
      ],
      parent: this.injector,
    });
  }
}
