import { Component, OnInit } from '@angular/core';

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
  topButtons: TopButton[] =
    [
      { id: 'Wedding-day', name: 'Wedding day' },
      { id: 'Getting-there', name: 'Getting there' },
      { id: 'Gifts', name: 'Gifts' },
      { id: 'Hotels', name: 'Hotels' },
      { id: 'RSVP', name: 'RSVP' },
    ];
  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(title: string): void {
    const element = document.querySelector(`#${title}`);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
