import {
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() ariaLabel!: string;
  @Input() text?: string;
  @Input() icon?: string;
  @Input() prependIcon?: string;
  @Input() appendIcon?: string;
  @Input() textColor?: string;
  @Input() filled: boolean = false;
  @Input() fillColor?: string;
  @Input() pill: boolean = false;
  @Input() outlined: boolean = false;
  @Input() banner: boolean = false;
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.setDefaultsByType();
  }

  ngOnChanges(): void {
    this.setDefaultsByType();
  }

  private setDefaultsByType(): void {
    if (this.filled) {
      this.setFilledDefaults();
    }

    if (this.pill) {
      this.setPillDefaults();
    }

    if (this.disabled) {
      this.fillColor = 'lemonDark';
    }

    this.fillColor = this.fillColor ?? 'lemon';
    this.textColor = this.textColor ?? 'black';
  }

  private setFilledDefaults(): void {
    this.fillColor = this.fillColor ?? 'primary';
    this.textColor = this.textColor ?? 'white';
    this.size = this.size ?? 'sm';
  }

  private setPillDefaults(): void {
    this.fillColor = this.fillColor ?? 'black';
    this.textColor = this.textColor ?? 'white';
    this.size = this.size ?? 'lg';
  }

  get buttonClasses(): string[] {
    return [
      'text-' + this.textColor,
      'bg-' + this.fillColor,
      this.icon && !this.text ? 'rounded-full' : '',
      this.filled ? 'shadow-sm' : '',
      this.pill ? 'w-full rounded-full uppercase' : '',
      !this.disabled
        ? this.fillColor === 'black'
          ? 'hover:bg-gray-700'
          : 'hover:brightness-90'
        : 'hover:brightness-100',
      this.outlined ? 'border border-black' : '',
      this.paddingClasses,
    ].filter(Boolean);
  }

  get paddingClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'px-5 py-2.5';
      case 'md':
      default:
        return 'p-2.5 sm:p-4';
      case 'lg':
        return 'py-[18px] px-8';
    }
  }
}
