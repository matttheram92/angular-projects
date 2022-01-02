import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AccessLevel } from '../access-level';
import { Tile } from "./tile.model";

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss'],
})
export class GridContentComponent implements OnInit {
  @Input() accessLevel!: AccessLevel;
  breakpoint: number = 8;

  tiles: Tile[] = [];
  constructor(private sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 500 ? 1 : 8;
    this.tiles = [
      {
        section: 'Wedding-day',
        cols: 8,
        rows: 4,
        component: 'simple-text',
        color: '#efefef',
        title: 'Saturday 30 April 2022',
        text: [
          "We are so excited to start the next chapter of our lives together and can't wait to celebrate with you in April!",
        ],
      },
      {
        section: 'Ceremony',
        cols: 3,
        rows: 4,
        component: 'simple-text',
        color: '#ffffff',
        title: 'The Ceremony',
        text: [
          'Saturday, 30 April 2022',
          '13:30',
          'Beeston Methodist Church',
          'Chilwell Rd',
          'Beeston',
          'Nottingham, NG9 1EH',
        ],
      },
      {
        section: 'Ceremony',
        cols: 5,
        rows: 4,
        component: 'image-and-map',
        color: '#efefef',
        img: 'https://www.churches-uk-ireland.org/images/notts/beeston/chilwell_meth.jpg',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.4111739445043!2d-1.2238854984069572!3d52.92302681393592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e9c6813dd74d%3A0x24cfe5545327b13!2sBeeston%20Methodist%20Church!5e0!3m2!1sen!2suk!4v1637596873047!5m2!1sen!2suk'),
        imageOrMap: 'image'
      },
      {
        section: 'Reception',
        cols: 3,
        rows: 4,
        component: 'image-and-map',
        color: '#efefef',
        img: 'https://live.staticflickr.com/65535/51793469517_2e13d91cbb_m.jpg',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4810.158385216913!2d-1.2249343496767655!3d52.92900208657566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4879e9c6813dd74d%3A0x24cfe5545327b13!2sBeeston%20Methodist%20Church%2C%20Chilwell%20Road%2C%20Beeston%2C%20Nottingham!3m2!1d52.9241939!2d-1.2180834!4m5!1s0x4879e9eac6e7ecd7%3A0xeab3d97eb0a0d335!2sThe%20Walled%20Garden%20at%20Beeston%20Fields%2C%20Old%20Drive%2C%20Wollaton%20Rd%2C%20Beeston%2C%20Nottingham%20NG9%203DA!3m2!1d52.932755799999995!2d-1.2310793!5e0!3m2!1sen!2suk!4v1637666932912!5m2!1sen!2suk'),
        imageOrMap: 'image'
      },
      {
        section: 'Reception',
        cols: 5,
        rows: 4,
        component: 'simple-text',
        color: '#ffffff',
        title: this.accessLevel === AccessLevel.FullAccess ? 'The Reception' : 'Evening Reception',
        text: [
          this.accessLevel === AccessLevel.FullAccess ? '' : 'Saturday, 30 April 2022',
          this.accessLevel === AccessLevel.FullAccess ? '' : '19:00',
          'The Walled Garden at Beeston Fields',
          'Beeston',
          'Nottingham, NG9 3DA',
        ],
      },
      {
        section: 'Reception',
        cols: 1,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Ceilidh',
        text: ['We\'re having an evening Ceilidh, so be sure to bring your dancing shoes!'],
        img: 'emoji_people'
      },
      {
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Parking',
        text: ['There will be overnight parking available at The Walled Garden. They ask that you please collect your car by 11AM on the next day.'],
        img: 'local_parking'
      },
      {
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Card payments',
        text: ['The bar will only take card payments and cannot accept any cash.'],
        img: 'credit_card'
      },
      {
        section: 'Reception',
        cols: 1,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        section: 'Gifts',
        cols: 8,
        rows: 4,
        component: 'simple-text',
        color: '#efefef',
        title: 'Gifts',
        text: [
          'All we want is for you to be there,',
          'but if you have some pennies to spare.',
          ' ',
          'And if a gift is your intention,',
          'we thought that we would mention,',
          'a contribution to our honeymoon pot,',
          'would be appreciated such a lot',
          ' ',
          'But just remember, what means the most,',
          "is that you're with us to raise a toast!",
        ],
      },
      {
        section: 'Hotels',
        cols: 3,
        rows: 4,
        component: 'simple-text',
        color: '#ffffff',
        title: 'Hotels',
        text: ['Some nearby hotels:', 'Travelodge Nottingham Wollaton Park – 0.9 miles', 'De Vere Orchard Hotel – 2 miles'],
      },
      {
        section: 'Hotels',
        cols: 5,
        rows: 4,
        component: 'map',
        color: '#efefef',
        img: '',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/d/embed?mid=1WXWURNZ_msxFkFo4B8Qi1r9_iYQPRR3-&hl=en'),
        imageOrMap: 'map',
        mapKey: [
          { icon: '✝', name: 'Church', color: '#0197a7', isIcon: false },
          { icon: 'local_bar', name: 'Reception', color: '#006064', isIcon: true },
          { icon: 'hotel', name: 'Travelodge', color: '#3949ab', isIcon: true },
          { icon: 'hotel', name: 'De Vere', color: '#7cb342', isIcon: true }
        ]
      },
      {
        section: 'RSVP',
        cols: 8,
        rows: 6,
        color: '#ffffff',
        title: 'RSVP',
        text: ['Please RSVP by Friday 18th Feburary'],
        component: 'create-rsvp'
      },
      {
        section: 'Song-request',
        cols: 8,
        rows: 3,
        color: '#efefef',
        title: 'Request a song',
        component: 'song-requests'
      }
    ];
  }

  onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 500 ? 1 : 8;
  }
}
