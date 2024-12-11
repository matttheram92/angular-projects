import { Component, Input } from '@angular/core';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon!: string;
  @Input() size?: number;
  @Input() color?: string;

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.icon = this.iconService.getIcon(this.icon, this.color, this.size);
  }
}
