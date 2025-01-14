import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavButton } from '@app/navigation/models/navigation.model';

@Component({
  selector: 'app-mobile-nav-button',
  templateUrl: './mobile-nav-button.component.html',
  styleUrls: ['./mobile-nav-button.component.scss'],
  standalone: false,
})
export class MobileNavButtonComponent {
  @Input() mobileNav!: NavButton;

  public onCurrentPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.onCurrentPage = `/${this.mobileNav.href}` === this.router.url;
    });
  }
}
