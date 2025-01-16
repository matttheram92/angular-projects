import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-heart-button',
  templateUrl: './heart-button.component.html',
  styleUrls: ['./heart-button.component.scss'],
  standalone: false,
})
export class HeartButtonComponent implements OnChanges {
  @Input() isDisabled = false;
  @Input() default = false;
  @Input() filled = false;
  @Output()
  buttonClicked: EventEmitter<void> = new EventEmitter<void>();
  public isChecked = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['default']) {
      this.isChecked = changes['default'].currentValue;
    }
  }

  public heartClicked(): void {
    this.buttonClicked.emit();

    if (this.isChecked) {
      this.isChecked = false;
      return;
    }

    this.isDisabled = true;
    setTimeout(() => {
      this.isChecked = true;
      this.isDisabled = false;
    }, 1000);
  }

  public onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.heartClicked();
    }
  }
}
