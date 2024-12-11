import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-button',
  templateUrl: './mobile-nav-button.component.html',
  styleUrls: ['./mobile-nav-button.component.scss'],
})
export class MobileNavButtonComponent {
  @Input() mobileNav!: any;
}
