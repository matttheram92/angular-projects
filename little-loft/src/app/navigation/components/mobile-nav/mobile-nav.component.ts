import { Component } from '@angular/core';
import { NavButton } from '@app/navigation/models/navigation.model';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  standalone: false,
})
export class MobileNavComponent {
  public navButtons: NavButton[] = [
    {
      text: 'Home',
      icon: 'home',
      href: 'home',
    },
    {
      text: 'Search',
      icon: 'search',
      href: 'search',
    },
    {
      text: 'Sell',
      icon: 'sell',
      href: 'sell',
    },
    {
      text: 'Inbox',
      icon: 'inbox',
      href: 'inbox',
    },
    {
      text: 'Profile',
      icon: 'profile',
      href: 'profile',
    },
  ];
}
