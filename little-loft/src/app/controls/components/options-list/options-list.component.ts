import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss'],
  standalone: false,
})
export class OptionsListComponent {
  @Input() options!: string[];

  constructor() {}
}
