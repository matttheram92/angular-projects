import { Component, Input, OnInit } from '@angular/core';
import { AccessLevel } from '../access-level';

export interface TopButton {
  id: string;
  name: string;
}

@Component({
  selector: 'app-top-image',
  templateUrl: './top-image.component.html',
  styleUrls: ['./top-image.component.scss']
})

export class TopImageComponent implements OnInit {
  @Input() accessLevel!: AccessLevel;
  topButtons: TopButton[] = [];
  constructor() { }

  ngOnInit(): void {
    this.topButtons =
    [
      { id: 'Ceremony', name: 'Ceremony' },
      { id: 'Reception', name: this.accessLevel === AccessLevel.FullAccess ? 'Reception' : 'Evening' },
      { id: 'Gifts', name: 'Gifts' },
      { id: 'Hotels', name: 'Hotels' },
      { id: 'RSVP', name: 'RSVP' },
    ];
  }

  scrollToElement(title: string): void {
    const element = document.querySelector(`#${title}`);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
