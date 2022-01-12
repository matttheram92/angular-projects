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
    this.tiles = [
      {
        position: 1,
        mobilePosition: 1,
        section: 'Wedding-day',
        cols: 8,
        rows: 2,
        component: 'simple-text',
        color: '#efefef',
        title: 'Saturday 30th April 2022',
        text: [
          "We're so excited to start the next chapter of our lives together and can't wait to celebrate with you in April!",
        ]
      },
      {
        position: 2,
        mobilePosition: 2,
        section: 'Ceremony',
        cols: 3,
        rows: 3,
        component: 'simple-text',
        color: '#ffffff',
        title: 'The Ceremony',
        text: [
          'Saturday 30th April 2022',
          '13:30',
          'Beeston Methodist Church',
          'Chilwell Road',
          'Beeston',
          'Nottingham, NG9 1EH',
        ],
      },
      {
        position: 3,
        mobilePosition: 3,
        section: 'Ceremony',
        cols: 5,
        rows: 3,
        component: 'image-and-map',
        color: '#efefef',
        img: 'https://live.staticflickr.com/65535/51817166568_3f3832b3f4_o.png',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.4111739445043!2d-1.2238854984069572!3d52.92302681393592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e9c6813dd74d%3A0x24cfe5545327b13!2sBeeston%20Methodist%20Church!5e0!3m2!1sen!2suk!4v1637596873047!5m2!1sen!2suk'),
        imageOrMap: 'image'
      },
      {
        position: 3,
        mobilePosition: 3,
        section: 'Ceremony',
        cols: 1,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        position: 3,
        mobilePosition: 3,
        section: 'Ceremony',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Car',
        text: ['Some parking is available at the church. The nearby Tesco also has 3 hours free parking.'],
        img: 'directions_car'
      },
      {
        position: 3,
        mobilePosition: 3,
        section: 'Ceremony',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Bus',
        text: ['The Indigo and #36 stop right outside the church.'],
        img: 'directions_bus'
      },
      {
        position: 3,
        mobilePosition: 3,
        section: 'Ceremony',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Tram',
        text: ['The nearest tram stop is Chilwell High Road - 200 yards away.'],
        img: 'tram'
      },
      {
        position: 3,
        mobilePosition: 3,
        section: 'Ceremony',
        cols: 1,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        position: 4,
        mobilePosition: 5,
        section: 'Reception',
        cols: 3,
        rows: 3,
        component: 'image-and-map',
        color: '#efefef',
        img: 'https://live.staticflickr.com/65535/51793469517_2e13d91cbb_m.jpg',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4810.158385216913!2d-1.2249343496767655!3d52.92900208657566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4879e9c6813dd74d%3A0x24cfe5545327b13!2sBeeston%20Methodist%20Church%2C%20Chilwell%20Road%2C%20Beeston%2C%20Nottingham!3m2!1d52.9241939!2d-1.2180834!4m5!1s0x4879e9eac6e7ecd7%3A0xeab3d97eb0a0d335!2sThe%20Walled%20Garden%20at%20Beeston%20Fields%2C%20Old%20Drive%2C%20Wollaton%20Rd%2C%20Beeston%2C%20Nottingham%20NG9%203DA!3m2!1d52.932755799999995!2d-1.2310793!5e0!3m2!1sen!2suk!4v1637666932912!5m2!1sen!2suk'),
        imageOrMap: 'image'
      },
      {
        position: 5,
        mobilePosition: 4,
        section: 'Reception',
        cols: 5,
        rows: 3,
        component: 'simple-text',
        color: '#ffffff',
        title: this.accessLevel === AccessLevel.FullAccess ? 'The Reception' : 'Evening Reception',
        text: [
          this.accessLevel === AccessLevel.FullAccess ? '' : 'Saturday 30th April 2022',
          this.accessLevel === AccessLevel.FullAccess ? '' : '19:00',
          'The Walled Garden at Beeston Fields',
          'Beeston',
          'Nottingham, NG9 3DA',
        ],
      },
      {
        position: 6,
        mobilePosition: 6,
        section: 'Reception',
        cols: 1,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        position: 7,
        mobilePosition: 7,
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Ceilidh',
        text: ['We\'re having an evening ceilidh, so make sure you bring your dancing shoes!'],
        img: 'emoji_people'
      },
      {
        position: 8,
        mobilePosition: 8,
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Parking',
        text: ['Free overnight parking is available at The Walled Garden. You will need to collect your car by 11am on the next day.'],
        img: 'local_parking'
      },
      {
        position: 9,
        mobilePosition: 9,
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
        position: 10,
        mobilePosition: 10,
        section: 'Reception',
        cols: 1,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        position: 11,
        mobilePosition: 11,
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        position: 12,
        mobilePosition: 12,
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Carriages',
        text: ['12:00am - 12:30am'],
        img: 'departure_board'
      },
      {
        position: 13,
        mobilePosition: 13,
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Taxis',
        text: ['If you need to book a taxi, we recommend using DG Cars', '0115 950 0500 - dgcars.co.uk'],
        img: 'local_taxi'
      },
      {
        position: 14,
        mobilePosition: 14,
        section: 'Reception',
        cols: 2,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        position: 15,
        mobilePosition: 15,
        section: 'Gifts',
        cols: 8,
        rows: 3,
        component: 'simple-text',
        color: '#efefef',
        title: 'Gifts',
        text: [
          'All we want is for you to be there to share our day with us,', 
          'but if you would like to give a gift,', 
          'we would be grateful for a small donation towards our honeymoon.',
        ],
      },
      {
        position: 16,
        mobilePosition: 16,
        section: 'Hotels',
        cols: 3,
        rows: 4,
        component: 'simple-text',
        color: '#ffffff',
        title: 'Hotels',
        links: [
          ['Travelodge Nottingham Wollaton Park - 0.9 miles', 'https://www.travelodge.co.uk/hotels/474/Nottingham-Wollaton-Park-hotel'],
          ['De Vere Orchard Hotel - 2 miles', 'https://www.devere.co.uk/orchard/'],
          ['Village Hotel - 3.5 miles', 'https://www.village-hotels.co.uk/hotels/nottingham/']
        ],
      },
      {
        position: 17,
        mobilePosition: 17,
        section: 'Hotels',
        cols: 5,
        rows: 4,
        component: 'map',
        color: '#efefef',
        img: '',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/d/embed?mid=1WXWURNZ_msxFkFo4B8Qi1r9_iYQPRR3-&hl=en'),
        imageOrMap: 'map',
        mapKey: [
          { icon: 'https://svg-clipart.com/clipart/white/mJGh7SY-white-cross-clipart.png', name: 'Church', color: '#0197a7', isIcon: false },
          { icon: 'local_bar', name: 'Reception', color: '#006064', isIcon: true },
          { icon: 'hotel', name: 'Travelodge', color: '#3949ab', isIcon: true },
          { icon: 'hotel', name: 'De Vere', color: '#7cb342', isIcon: true }
        ]
      },
      {
        position: 18,
        mobilePosition: 18,
        section: 'RSVP',
        cols: 8,
        rows: 5,
        color: '#ffffff',
        title: 'RSVP',
        text: ['Please RSVP by Friday 18th Feburary'],
        component: 'create-rsvp'
      },
      {
        position: 19,
        mobilePosition: 19,
        section: 'Song-request',
        cols: 8,
        rows: 3,
        color: '#efefef',
        title: 'Request a song',
        text: ['After the ceilidh there\'ll be more music and dancing.', 'So let us know if you have any song requests.'],
        component: 'song-requests'
      },
      {
        position: 20,
        mobilePosition: 20,
        section: 'Question',
        cols: 2,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
      {
        position: 21,
        mobilePosition: 21,
        section: 'Question',
        cols: 4,
        rows: 3,
        component: 'image-and-text',
        color: '#ffffff',
        title: 'Any questions?',
        text: ['If you have any questions or need any more information, please feel free to contact either of us directly.', 'Our contact details can be found on the RSVP card you received with your invitation.'],
        img: 'question_mark'
      },
      {
        position: 22,
        mobilePosition: 22,
        section: 'Question',
        cols: 2,
        rows: 3,
        component: 'empty',
        color: '#ffffff',
      },
    ];
    const isMobile = window.innerWidth <= 500;
    this.reorderGrid(isMobile);
  }

  onResize(event: any): void {
    const isMobile = event.target.innerWidth <= 500;
    this.reorderGrid(isMobile);
  }

  reorderGrid(isMobile: boolean): void {
    if (isMobile) {
      this.breakpoint = 1;
      this.tiles.sort((a, b) => (a.mobilePosition < b.mobilePosition ? -1 : 1));
    } else {
      this.breakpoint = 8;
      this.tiles.sort((a, b) => (a.position < b.position ? -1 : 1));
    }
  }
}
