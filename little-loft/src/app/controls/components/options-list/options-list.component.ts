import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss'],
})
export class OptionsListComponent {
  @Input() options!: string[];
}
