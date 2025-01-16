import { Component } from '@angular/core';
import { NavButton } from '@app/navigation/models/navigation.model';
import { MOBILE_NAV_BUTTONS } from './consts/mobile-nav.consts';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  standalone: false,
})
export class MobileNavComponent {
  public navButtons: NavButton[] = MOBILE_NAV_BUTTONS;
}
