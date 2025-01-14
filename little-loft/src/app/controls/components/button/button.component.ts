import { Component, Input } from '@angular/core';
import { ButtonTypes } from '../../consts/controls.consts';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent {
  @Input() type!: ButtonTypes;
  @Input() text!: string;
  @Input() ariaLabel?: string;
  @Input() icon?: string;
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() disabled = false;

  get isFilled(): boolean {
    return this.type === 'filled';
  }

  get isText(): boolean {
    return this.type === 'text';
  }

  get isIcon(): boolean {
    return this.type === 'icon';
  }

  get isIconFilled(): boolean {
    return this.type === 'icon-filled';
  }

  get isTextIconLeft(): boolean {
    return this.type === 'text-icon-left';
  }

  get isTextIconRight(): boolean {
    return this.type === 'text-icon-right';
  }

  get isCircle(): boolean {
    return this.type === 'circle';
  }

  get isBanner(): boolean {
    return this.type === 'banner';
  }

  get isPill(): boolean {
    return this.type === 'pill';
  }

  get isPillSecondary(): boolean {
    return this.type === 'pill-secondary';
  }
}
