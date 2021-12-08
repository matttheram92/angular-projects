import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Tile {
  section: string;
  color: string;
  cols: number;
  rows: number;
  title?: string;
  text?: string[];
  img?: string;
  map?: SafeResourceUrl;
  imageOrMap?: string;
  component?: string;
}

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss'],
})
export class GridContentComponent implements OnInit {
  breakpoint: number = 8;

  tiles: Tile[] = [];
  constructor(private sanitizer: DomSanitizer) {
    this.tiles = [
      {
        section: 'Wedding-day',
        cols: 8,
        rows: 4,
        color: '#efefef',
        title: 'Saturday 30 April 2022',
        text: [
          "We are so excited to start the next chapter of our lives together and can't wait to celebrate with you in April!",
        ],
      },
      {
        section: 'Getting-there',
        cols: 3,
        rows: 4,
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
        section: 'Getting-there',
        cols: 5,
        rows: 4,
        color: '#efefef',
        img: 'https://www.churches-uk-ireland.org/images/notts/beeston/chilwell_meth.jpg',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.4111739445043!2d-1.2238854984069572!3d52.92302681393592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e9c6813dd74d%3A0x24cfe5545327b13!2sBeeston%20Methodist%20Church!5e0!3m2!1sen!2suk!4v1637596873047!5m2!1sen!2suk'),
        imageOrMap: 'image'
      },
      {
        section: 'Getting-there',
        cols: 3,
        rows: 4,
        color: '#efefef',
        img: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/68665190_2426106220816958_1757098196267433984_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHo4OAa-IcZLndk8J7Dw5g1L-fOy5mhOXIv587LmaE5chMTXgdaKC_OjlinrnJbFKA&_nc_ohc=m9W5BUTNmc0AX8D4r3Y&_nc_ht=scontent-lhr8-1.xx&oh=a5bb62ea81c9aa25c98904b2dc1272e4&oe=61C00F7B',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4810.158385216913!2d-1.2249343496767655!3d52.92900208657566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4879e9c6813dd74d%3A0x24cfe5545327b13!2sBeeston%20Methodist%20Church%2C%20Chilwell%20Road%2C%20Beeston%2C%20Nottingham!3m2!1d52.9241939!2d-1.2180834!4m5!1s0x4879e9eac6e7ecd7%3A0xeab3d97eb0a0d335!2sThe%20Walled%20Garden%20at%20Beeston%20Fields%2C%20Old%20Drive%2C%20Wollaton%20Rd%2C%20Beeston%2C%20Nottingham%20NG9%203DA!3m2!1d52.932755799999995!2d-1.2310793!5e0!3m2!1sen!2suk!4v1637666932912!5m2!1sen!2suk'),
        imageOrMap: 'image'
      },
      {
        section: 'Getting-there',
        cols: 5,
        rows: 4,
        color: '#ffffff',
        title: 'The Reception',
        text: [
          'The Walled Garden at Beeston Fields',
          'Beeston',
          'Nottingham, NG9 3DA',
        ],
      },
      {
        section: 'Gifts',
        cols: 8,
        rows: 4,
        color: '#efefef',
        title: 'Gifts',
        text: [
          'All we want is for you to be there,',
          'but if you have some pennies to spare.',
          '',
          'And if a gift is your intention,',
          'we thought that we would mention,',
          'a contribution to our honeymoon pot,',
          'would be appreciated such a lot',
          '',
          'But just remember, what means the most,',
          "is that you're with us to raise a toast!",
        ],
      },
      {
        section: 'Hotels',
        cols: 3,
        rows: 4,
        color: '#ffffff',
        title: 'Hotels',
        text: ['Some nearby hotels:', 'Travelodge Nottingham Wollaton Park – 0.9 miles', 'De Vere Orchard Hotel – 2 miles'],
      },
      {
        section: 'Hotels',
        cols: 5,
        rows: 4,
        color: '#efefef',
        img: '',
        map: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/d/embed?mid=1WXWURNZ_msxFkFo4B8Qi1r9_iYQPRR3-&hl=en'),
        imageOrMap: 'map'
      },
      {
        section: 'RSVP',
        cols: 8,
        rows: 4,
        color: '#ffffff',
        title: 'RSVP',
        text: ['Kindly respond by 18th Feburary 2022'],
        component: '<mat-form-field appearance="outline"><mat-label>Outline form field</mat-label><input matInput placeholder="Placeholder"><mat-icon matSuffix>sentiment_very_satisfied</mat-icon><mat-hint>Hint</mat-hint></mat-form-field>'
      },
    ];
  }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 500 ? 1 : 8;
  }

  onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 500 ? 1 : 8;
  }
}
