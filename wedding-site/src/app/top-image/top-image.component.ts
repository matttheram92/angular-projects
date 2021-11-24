import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-image',
  templateUrl: './top-image.component.html',
  styleUrls: ['./top-image.component.scss']
})

export class TopImageComponent implements OnInit {
  topButtons = ['Wedding-day', 'Getting-there', 'Gifts', 'Hotels', 'RSVP'];
  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(title: string): void {
    const element = document.querySelector(`#${title}`);
    if (!element) {
      return;
    }
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
