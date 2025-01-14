import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss'],
  standalone: false,
})
export class OptionsListComponent {
  @Input() options!: string[];

  constructor(private router: Router) {}

  public navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
