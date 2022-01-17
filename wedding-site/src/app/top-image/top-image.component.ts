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
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
    const isMobile = window.innerWidth <= 715;
    this.showMenu = !isMobile;
    this.topButtons =
    [
      { id: 'Ceremony', name: 'Ceremony' },
      { id: 'Reception', name: this.accessLevel === AccessLevel.FullAccess || this.accessLevel === AccessLevel.AdminAccess ? 'Reception' : 'Evening Reception' },
      { id: 'Gifts', name: 'Gifts' },
      { id: 'Hotels', name: 'Hotels' },
      { id: 'RSVP', name: 'RSVP' },
    ];
  }
  
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  onResize(event: any): void {
    const isMobile = event.target.innerWidth <= 715;
    this.showMenu = !isMobile;
  }

  scrollToElement(title: string): void {
    const element = document.querySelector(`#${title}`);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
