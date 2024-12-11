import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent {
  public navButtons = [
    {
      text: 'Home',
      icon: 'home',
      href: '/home',
    },
    {
      text: 'Search',
      icon: 'search',
      href: '/home',
    },
    {
      text: 'Sell',
      icon: 'sell',
      href: '/sell',
    },
    {
      text: 'Inbox',
      icon: 'inbox',
      href: '/home',
    },
    {
      text: 'Profile',
      icon: 'profile',
      href: '/home',
    },
  ];
}
