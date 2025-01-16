import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: false,
})
export class SideMenuComponent {
  @Input() loggedIn!: boolean;

  @Output()
  closeMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
}
