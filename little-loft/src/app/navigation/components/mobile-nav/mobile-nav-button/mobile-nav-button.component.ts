import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-nav-button',
  templateUrl: './mobile-nav-button.component.html',
  styleUrls: ['./mobile-nav-button.component.scss'],
})
export class MobileNavButtonComponent {
  @Input() mobileNav!: any;

  public onCurrentPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.onCurrentPage = `/${this.mobileNav.href}` === this.router.url;
    });
  }
}
