import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonTypes } from '../../consts/controls.consts';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type!: ButtonTypes;
  @Input() text!: string;
  @Input() href?: string;
  @Input() icon?: string;
  @Input() disabled = false;

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  get isFilled(): boolean {
    return this.type === 'filled';
  }

  get isText(): boolean {
    return this.type === 'text';
  }

  get isIcon(): boolean {
    return this.type === 'icon';
  }

  get isTextIcon(): boolean {
    return this.type === 'text-icon';
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

  public clicked(event: MouseEvent): void {
    event.stopPropagation();
    this.click.emit();
  }
}
