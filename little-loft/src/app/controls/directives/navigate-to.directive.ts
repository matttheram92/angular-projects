import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appNavigateTo]',
  standalone: false,
})
export class NavigateToDirective {
  @Input() appNavigateTo!: string;

  constructor(private router: Router) {}

  @HostListener('click')
  onClick(): void {
    this.navigate();
  }

  @HostListener('keydown.enter', ['$event'])
  onKeydown(_event: KeyboardEvent): void {
    this.navigate();
  }

  private navigate(): void {
    if (this.appNavigateTo) {
      this.router.navigate([this.appNavigateTo]);
    }
  }
}
