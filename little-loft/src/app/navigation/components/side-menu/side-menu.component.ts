import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Input() loggedIn!: boolean;

  @Output()
  closeMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
    this.closeMenu.emit();
  }
}
